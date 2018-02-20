# About this repository

# Best practices

## HTML Best Practices

**1. Close your tags**

Always. Leaving some tags open is simply bad practice and you should try to avoid it. Otherwise, you’ll encounter validation issues (and, sometimes, cry).

**2. Never use inline styles**

When creating your markup, don’t ever dare to think about the styling yet, as it would be very hard to override these styles in case you need to. The only moment when it’s not a sin to add styles is once the page has been completely coded.

**3. Include external CSS inside the HEAD tag**

You can place style sheets anywhere but the HTML specification recommends that they be placed within the document HEAD tag. The primary benefit is that your pages will load faster and you’ll swear less.

**4. Consider placing JavaScript at the bottom**

When loading a script, the browser can’t continue until the entire file has been loaded. If you have JavaScript files in order to add functionality, place those files at the bottom, just before the closing body tag. This is a good performance practice and the results are really noticeable.

**5. Never use inline JavaScript**

Repeat it after me to internalize it. We’re not in the ‘90s anymore! Instead, try transferring this code to an external JS file.

**6. Use lowercase in you tags**

It is a good practice to keep your markup lower-case. Capitalizing your markup will work and will probably not affect how your web pages are rendered, but it does affect code readability. Keep it simple.

**7. Structure your HTML using all the tags**

Try to make it easier to read. Instead of staying with divs for everything, learn and use the new HTML 5 elements like `<header>`, `<footer>`, `<article>` and others. They work the same way but improve readability with less writing. Avoid creating mountains of divs by using them sparingly and responsibly.

**8. Use semantics elements**

A semantic element describes its meaning to the browser and the developer.

**9. Keep the syntax organized**

As pages might (and will) grow, managing HTML can be hard. There are some quick rules that can help us to keep our syntax clean and organized. These include the following:
    - Indent nested elements
    - Use double quotes, not single or completely omitted quotes
    - Omit the values on Boolean attributes


**10. Use practical ID and classes names and values**

You should only give elements an ID attribute if they are unique. Classes can be applied to multiple elements that share the same style properties. It is always preferable to name something ID or class, by the nature of what it is rather than by what it looks like.

And now that we’ve seen the most useful practices at the time of coding HTML, it will do no harm to go through some CSS ones.

## CSS Best Practices

**1. Organize your code with comments**

Let’s keep our styles organized in logical groups and provide a comment noting what the following styles pertain to. Otherwise you’ll regret it later.

**2. Write code using multiple lines and spaces**

It is important to place each selector and declaration on a new line. That will make the code easy to read and edit.

**3. Use proper class names**

Class names should be modular and pertain to content within an element, not appearance. Class names should be all lowercase and use hyphen delimiters.

**4. Build proficient selectors**

CSS selectors can get out of control if they are not carefully maintained. They can easily become too long and too location specific. Not using IDs in your selectors, or are overly specific, quickly raise the specificity of a selector, and quite often break the cascade within our CSS files.

**5. Use shorthand**

One feature of CSS is the ability to use shorthand properties and values. Using that allows us to quickly set and identify styles. But when we’re only setting one value, shorthand alternatives should not be used, because it will be hard to identify which cssattr is being applied.

**6. Avoid units on zero values**

One way to easily cut down on the amount of CSS we write is to remove the unit from any zero value. A zero will always be a zero.

**7. Modularize styles for reuse**

CSS is built to allow styles to be reused, specifically with the use of classes. For this reason, styles assigned to a class should be modular and available to share across elements as necessary.

**8. Make it readable**

In this way your CSS will be much easier to maintain in the future, and also you´ll be able to find elements in a heartbeat.

**9. Base your styles in the HTML structure**

Not the other way around. Creating the HTML first allows you to visualize the entire page as a whole, and to think of your CSS in a more holistic, top-down manner.

**10. Use multiple stylesheets**

But be aware of them expanding beyond control. Depending on the complexity of the design and the size of the site, sometimes it’s easier to make smaller, multiple stylesheets instead of a giant one. If you cross the line and end up having too many stylesheets it might be hard to follow and find where some styles are.

>sada

# Image Gallery

# Async API Data
