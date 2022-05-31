import React from "react";
import "../styles.css";

export default function WebsitesToFollow() {
  return (
    <div className="WebsitesToFollow">
      <h1>Websites to follow:</h1>
      <table>
        <tr>
          <th>Websites</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>
            <a href="https://www.seytech.co/">Seytech Portal</a>
          </td>
          <td>Our interactive learning and tracking platform.</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.freecodecamp.org/">FreeCodeCamp</a>
          </td>
          <td>Online interactive platform that offers free coding classes.</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.codecademy.com/learn">Codeacademy</a>
          </td>
          <td>
            Online interactive platform that offers free coding classes in 12
            different programming languages.
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://stackoverflow.com/nocaptcha?s=6f86b4cc-d955-4d7f-ad41-eee07594edec">
              Stack Overflow
            </a>
          </td>
          <td>
            Stack Overflow is a question and answer site for professional and
            enthusiast programmers.
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://betterprogramming.pub/top-10-programming-blogs-in-2020-dda86feead1f">
              Medium
            </a>
          </td>
          <td>A website to read blogs about programming.</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.quora.com/">Quora</a>
          </td>
          <td> A website to read blogs about almost anything.</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.youtube.com/results?search_query=html+learning+projects">
              Youtube
            </a>
          </td>
          <td> Tutorial to follow and practice.</td>
        </tr>
      </table>
    </div>
  );
}
