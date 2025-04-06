import json

def remove_points_from_geojson(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    if 'features' in data:
        data['features'] = [feature for feature in data['features'] 
                            if feature['geometry']['type'] != 'Point']
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4)

if __name__ == "__main__":
    input_geojson = "velosofize_personal.geojson"  # Change to your input file
    output_geojson = "velosofize_personal.geojson"  # Change to your output file
    remove_points_from_geojson(input_geojson, output_geojson)
    print(f"Filtered GeoJSON saved to {output_geojson}")

