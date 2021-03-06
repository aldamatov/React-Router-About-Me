import React from "react";
import "../styles.css";

export default function Tools() {
  return (
    <div className="Tools">
      <h1>Essential Front End Web development tools</h1>
      <table>
        <tr>
          <th>Tools</th>
          <th> Description</th>
        </tr>

        <tr>
          <td> Code Editors </td>
          <td>
            As a developer, you spend most of your day in your code editor
            because it’s the place you actually write the code for your sites.
            All editors provide the plain text format needed for your code to be
            interpreted as a website. Our favorite editor, VS Code, streamlines
            your work by letting you customize it with thousands of add-on
            features, functions, and themes so the tool you use most looks and
            works exactly the way you want. Atom was built by Microsoft.{" "}
          </td>
        </tr>
        <tr>
          <td>Version Control Systems</td>
          <td>
            Even if you’re freelancing, but especially if you’re part of a team,
            you need a reliable version control system to keep track of all the
            changes you make to your code over time. Trust us, at some point
            you’ll need to check or even revert to an earlier version of your
            code base! Git is a decentralized version control system which
            allows everyone on your team to work with the same files in the same
            project simultaneously without worrying that you might be
            overwriting someone’s work. It gives developers more freedom to work
            whenever and wherever since everyone has a local copy of the code.
          </td>
        </tr>
        <tr>
          <td>Front end assets</td>
          <td>
            Once you’ve made a solid start setting up the code for your site,
            you’ll want to be sure it’s savvy-looking too. By selecting some
            stunning front-end assets like fonts, icons, photos, and graphics,
            you can transform any site from boring to beautiful. Google Fonts is
            our favorite front-end asset for the incredible selection it
            provides for your site typography. And Font Awesome is, well,
            awesome for the vast array of icons it offers (1,000+ for free and
            7,000+ on the paid plan). Similarly, Unsplash boasts more than
            800,000 high-resolution stock photos you can use, all at no charge
            and with no copyright hassles.
          </td>
        </tr>
        <tr>
          <td>Front End Frameworks </td>
          <td>
            Speaking of looking good, front-end frameworks are another must-have
            for front-end developers! Front-end frameworks are packages of files
            for styling and laying out your websites. Frameworks are made up of
            ready-made navigation menus, buttons, forms, typography, and other
            assets so you don’t have to write all that code yourself.
          </td>
        </tr>
        <tr>
          <td>CSS preprocessor</td>
          <td>
            CSS is a style sheet language used for styling your web pages. And
            you can make creating a beautiful site with CSS even simpler with
            preprocessors. A CSS preprocessor is basically a language that,
            after it’s processed, gives you even more CSS features. A
            preprocessor also lets you write code that’s easier to read,
            maintain, and share—all vital for working on a developer team or
            even on your own.
          </td>
        </tr>
        <tr>
          <td> Javascript Frameworks / Libraries </td>
          <td>
            {" "}
            JavaScript libraries are collections of code that make your sites
            interactive, provide better browser support, and add effects like
            animations, blog post tags, and auto-completing form fields. Like
            libraries, JavaScript frameworks can simplify your front-end
            development workflow. But frameworks differ from libraries in that
            frameworks provide the overall structure (or framework) for sites
            using JavaScript, while libraries focus on one or more specific
            aspects of a site.
          </td>
        </tr>
      </table>
    </div>
  );
}
