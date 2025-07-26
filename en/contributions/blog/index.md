---
title: Contributing to the blog through GitHub
---

The reason why GitHub was chosen as the basis for this project is that it allows for an understandable process for contributors with version control with reviews and comments before a contributor's changes are added to the blog itself - all possible through the browser directly.

While Github may seem intimidating to people without a background in IT, the browser version is really nothing to fear even for beginners. Here’s a short guide to help you get started:

## Steps to contribute

### Step 0:

Think of a topic you think would fit into this blog or of a change to the existing pages in it, such as updating a broken link or some information from an external source.
Adding references to other projects which would be useful for cyclists in Bulgaria would be a good idea, for example.

If you're unsure whether your idea will fit into the blog or where exactly in it, you can submit an Issue first and we can discuss your suggestion in the comments before you get started with your writing.

To ensure a high standard of the content on the blog, suggestions are not guaranteed to be accepted, of course.

### Step 1: Create a GitHub Account

If you don’t already have one, go to [the sign-up page](https://github.com/signup) and follow the instructions to create your free account.

### Step 2: Fork the Blog's Repository

“Forking” means creating your own copy of the blog’s code and content so you can safely make changes before adding them to the actual blog.

1. Visit the blog’s original [GitHub repository](https://github.com/velosofist/velosofize).
2. In the top right corner, click the **Fork** button.
3. GitHub will create a copy of the repository under your own account with a link such as `https://github.com/yourusername/velosofize`.

### Step 3: Make Your Changes

1. Go to **your forked repository**.
2. Navigate to the file you want to edit
   1. If you're adding a new article in Bulgarian, go to the `bg` folder and click **Add file > Create new file** in the appropriate folder of your choosing.
   2. Name the file something simple, like one or two words in english separated by an underscore (for example: `safety_tips.md`)
3. Use Markdown formatting to write your post or edit existing content. This might sound difficult at first, but I've written a summary of the few guidelines you need to follow below.
4. Add a short description of your changes in the **Commit changes** box.
5. Click **Commit changes**.

> If you're unsure where to put something, you can also leave a note in your commit message and I’ll help review it!

### Step 4: Create a Pull Request

Once your changes are ready:

1. Go to the main repository (the original blog repo).
2. GitHub will often show a prompt like:  
   _“You’ve recently pushed changes to [your fork] – would you like to create a pull request?”_  
   Click **Compare & pull request**.
3. Add a short title and optional description explaining your change.
4. Click **Create pull request**.

That’s it! I’ll review your contribution, possibly leave comments or suggestions, and then merge it into the blog.

---

## Markdown

Don't be discouraged by this part of the process - Markdown syntax is simple and a great way to format content just by typing special symbols. Here's most of what you'd need for an article with some headers, plain text and some images:

### Title:

Add this to the top of your markdown file:

> --- \
> title: \<your title\> \
> \---

### Headers

Use ## as a 2nd order header, ### for 3rd order and so on. For technical reasons it's best not to use 1st order headers.

### Bold and italic

Surround text with "\*" for *Italic* and "\*\*" for **Bold**.

### Links

The format used is `[Text to be displayed in the article](link)` and the result is: [Text to be displayed in the article](https://github.com/velosofist/velosofize)

To reference other articles or files in this project, use the path to the corresponding file, such as `[Правилници](/bg/rulebooks/index.html)`, which results in [Правилници](/bg/rulebooks/index.html). Note that `.md` files are converted to `.html` files on the site itself.

### Images

Drag-and-drop would be fine.

<!-- Upload images to the `/attachments/contributors/` folder of the project. It would be helpful to give the image file a short, descriptive name in English with underscores instead of spaces, such as `bike_amenities.png` . Then just use this element on a new line of your article with the name of your image:

`<img src="/attachments/contributors/<your-image-name>" alt="Image" width="500">`

> Please add a comment for the source of said image in the description of your commit and make sure you're not violating copyright. -->

### Blockquotes

```plain
> Write
>
> some lines
>> like this
```

And they'll be displayed like this:

> Write
>
> some lines
>> like this

Please also provide a source with a link when quoting external sources.

### Others

Files from other sources, such as diagrams made in [draw.io](https://draw.io) are also acceptable. You can always ask for clarification in the Issues section if you need some help with integrating those in your article.

### List of contents

This is easy for me to add later if you want - do not bother writing it out manually :) .

## What Happens After You Submit a Pull Request?

- I’ll get notified and take a look at your proposed changes.
- If anything needs adjusting, I’ll leave a comment – you can go back and edit with additional commits.
- Once everything looks good, I’ll merge it and your contribution will appear on the blog. I'll send you a link!

## Notes

- It's best to communicate in English on GitHub to make things understandable for foreigners and let them contribute freely.
- Don’t worry if you get stuck — just open an [Issue](https://github.com/yourusername/blog/issues) in the repository or send me a message, and I’ll be happy to help you through it.
- Thank you for taking the time to contribute!
