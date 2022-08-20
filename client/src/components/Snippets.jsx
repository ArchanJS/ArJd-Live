class Language {
  constructor(name, extension, code, sampleCode) {
    this.name = name;
    this.extension = extension;
    this.code = code;
    this.sampleCode = sampleCode;
  }
}

let c = new Language(
  "C",
  "c",
  "c",
  `#include<stdio.h>
  
  int main(){
      printf("Welcome to ArJd-Live!");
      return 0;
  }`
)

let cpp = new Language(
  "C++",
  "cpp",
  "cpp",
  `#include<bits/stdc++.h>
  using namespace std;

  int main(){
      cout << "Welcome to ArJd-Live!";
      return 0;
  }`
);

let python = new Language("Python", "py", "python", `print("Welcome to ArJd-Live!")`);

let java = new Language(
  "Java",
  "java",
  "java",
  `public class Main {
        
      public static void main(String[] args) {
          System.out.println("Welcome to ArJd-Live!"); 
      }
      
  }`
);

let javascript = new Language("JavaScript", "js", "javascript", `console.log("Welcome to ArJd-Live!")`);

let csharp = new Language("C#", "cs", "csharp", `namespace Welcome
{
    class Hello {         
        static void Main(string[] args)
        {
            System.Console.WriteLine("Welcome to ArJd-Live!");
        }
    }
}`);

let go = new Language(
  "Go",
  "go",
  "go",
  `package main
  import "fmt"

  func main() {
      fmt.Println("Welcome to ArJd-Live!")
  }`
);

const languages = [python, c, cpp, java, javascript, go, csharp];
const themes = [
  "monokai",
  "github",
  "tomorrow",
  "kuroir",
  "twilight",
  "xcode",
  "textmate",
  "solarized_dark",
  "solarized_light",
  "terminal"
];
const highlightedLangs = [
  "javascript",
  "java",
  "python",
  "xml",
  "ruby",
  "sass",
  "markdown",
  "mysql",
  "json",
  "html",
  "handlebars",
  "golang",
  "csharp",
  "elixir",
  "typescript",
  "css"
];

export { languages, themes, highlightedLangs };