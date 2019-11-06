$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/cowan/Documents/GitHub/TrueJ/Cucumber/Features/Spec Features/c_block.feature");
formatter.feature({
  "line": 1,
  "name": "Blocks delimit the scope of variable names",
  "description": "\r\nA block is compound statement that organizes a list of statements together into a single unit and provides a syntactic scope for variables and their values. We code a block by inclosing a sequence of statements between curly braces. All of an object\u0027s procedural code is contained in blocks, either method bodies, constructor bodies, or initializer blocks.",
  "id": "blocks-delimit-the-scope-of-variable-names",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "The meaning of a block is the conjunction of the meanings of its sequence of statements",
  "description": "\r\nIf there is no top-level means-statement, then the meaning of a block is the conjunction of the meaning of all of its top level statements. We illustrate this with a method block that contains no means statements. We can see that the meaning of the method block is the conjunction of the meaning of its statements by comparing it with the means statement for the entire method definition.",
  "id": "blocks-delimit-the-scope-of-variable-names;the-meaning-of-a-block-is-the-conjunction-of-the-meanings-of-its-sequence-of-statements",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "a valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 10,
    "value": "class BlockMeaning1 {\r\n\r\nint a, b;\r\nint startingA;\r\n\r\nvoid swap() {\r\n  startingA\u0027 \u003d \u0027a;\r\n  a\u0027 \u003d \u0027b;\r\n  b\u0027 \u003d startingA\u0027;\r\n}\r\nmeans(startingA\u0027 \u003d \u0027a \u0026 a\u0027 \u003d \u0027b \u0026 b\u0027 \u003d startingA\u0027);\r\n\r\n} // end class"
  }
});
formatter.match({
  "location": "StepDefinitions.a_valid_run_unit_is(String)"
});
formatter.result({
  "duration": 740811000,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "The means-statement replaces the meaning of the blocks\u0027s preceding statements",
  "description": "\r\nThe means-statement is used to summarize, refactor, or reformulate the meaning of all the\r\npreceding statements of the block, replacing them with the means-statement. The compiler will only\r\naccept means statements that are logically entailed by the meaning of the statements that it\r\nsummarizes. Thus, a programmer reading the block of code can use the means statement to understand\r\nthe intent of the preceding statements. Also, in order to understand the overall meaning of a\r\nblock, the programmer can start reading at the bottommost means statement, so it is good practice\r\nto have a final means statement at the end of every nontrivial block.\r\n\r\nNote that the current value of a local variable may be forgotten after a means-statement, but its\r\ntype is still available to allow definition of a new value for it.",
  "id": "blocks-delimit-the-scope-of-variable-names;the-means-statement-replaces-the-meaning-of-the-blocks\u0027s-preceding-statements",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "a valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 40,
    "value": "class BlockMeaning2 {\r\n\r\nint a, b;\r\n\r\nvoid swap() {\r\n  int startingA\u0027 \u003d \u0027a;\r\n  a\u0027 \u003d \u0027b;\r\n  b\u0027 \u003d startingA\u0027;\r\n  means(a\u0027 \u003d \u0027b \u0026 b\u0027 \u003d \u0027a);\r\n}\r\n\r\n} // end class"
  }
});
formatter.step({
  "line": 55,
  "name": "a valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 56,
    "value": "class BlockMeaning2a {\r\n\r\nint a, b;\r\n\r\nvoid swap() {\r\n  int startingA\u0027 \u003d \u0027a;\r\n  int \u0027startingB \u003d \u0027b;\r\n  a\u0027 \u003d \u0027startingB;\r\n  means (startingA\u0027 \u003d \u0027a \u0026 a\u0027 \u003d \u0027b); // forget \u0027startingB \u003d \u0027b \u0026 a\u0027 \u003d \u0027startingB\r\n  b\u0027 \u003d startingA\u0027;\r\n  means (a\u0027 \u003d \u0027b \u0026 b\u0027 \u003d \u0027a);\r\n}\r\n\r\n} // end class"
  }
});
formatter.step({
  "line": 73,
  "name": "a valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 74,
    "value": "class BlockMeaning2a {\r\n\r\nint a, b;\r\n\r\nvoid swap() {\r\n  int startingA\u0027 \u003d \u0027a;\r\n  int \u0027startingB \u003d \u0027b + \u0027a;\r\n  means (startingA\u0027 \u003d \u0027a); // \u003c\u003d\u003d\u003d\u003d start reading here\r\n  startingB\u0027 \u003d \u0027b;         // we can create a new value for variable startingB\r\n  a\u0027 \u003d startingB\u0027;\r\n  b\u0027 \u003d startingA\u0027;\r\n}\r\nmeans (a\u0027 \u003d \u0027b \u0026 b\u0027 \u003d \u0027a);\r\n\r\n} // end class"
  }
});
formatter.step({
  "line": 92,
  "name": "an invalid run unit is",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 93,
    "value": "class BlockMeaning2b {\r\n\r\nint a, b, c;\r\n\r\nvoid rotateLeft() {\r\n  int startingA\u0027 \u003d \u0027a;\r\n  a\u0027 \u003d \u0027b;\r\n  means a\u0027 \u003d \u0027b;   // forget startingA\u0027 \u003d \u0027a\r\n  b\u0027 \u003d \u0027c;\r\n  c\u0027 \u003d startingA\u0027; // error because the value of startingA\u0027 is forgotten\r\n  means a\u0027 \u003d \u0027b \u0026 b\u0027 \u003d \u0027c \u0026 c\u0027 \u003d \u0027a;\r\n}\r\n\r\n} // end class"
  }
});
formatter.step({
  "comments": [
    {
      "line": 109,
      "value": "# TODO: Then an error message contains"
    },
    {
      "line": 110,
      "value": "# \"\"\""
    },
    {
      "line": 111,
      "value": "# The value of startingA\u0027 is not known at this point"
    },
    {
      "line": 112,
      "value": "# \"\"\""
    }
  ],
  "line": 113,
  "name": "an error message contains",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 114,
    "value": "The code does not support the proof of the statement: c\u0027 \u003d \u0027a"
  }
});
formatter.match({
  "location": "StepDefinitions.a_valid_run_unit_is(String)"
});
formatter.result({
  "duration": 158719800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.a_valid_run_unit_is(String)"
});
formatter.result({
  "duration": 210557700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.a_valid_run_unit_is(String)"
});
formatter.result({
  "duration": 165489800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.an_invalid_run_unit_is(String)"
});
formatter.result({
  "duration": 717530000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.an_error_message_contains(String)"
});
formatter.result({
  "duration": 122000,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "Blocks may be nested",
  "description": "\r\nA block may be nested in another block\u0027s sequential code or used as part of a complex control statement, such as being one branch of a conditional statement. When a block is nested within another block, the inside block is treated as a single compound statement of the enclosing block with its own meaning that can be given in a single statement. When a block is part of a complex control statement, the meaning of the block plays one part of the more complex meaning of the control statement. We will treat the conditional and iterative statements that may contain blocks in a separate feature descriptions.",
  "id": "blocks-delimit-the-scope-of-variable-names;blocks-may-be-nested",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 122,
  "name": "a valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 123,
    "value": "class BlockMeaning3 {\r\n\r\nint a, b;\r\n\r\nvoid swap() {\r\n  int startingA\u0027 \u003d \u0027a;\r\n  { int startingB\u0027 \u003d \u0027b;\r\n    a\u0027 \u003d startingB\u0027;\r\n    means (a\u0027 \u003d \u0027b);\r\n  }\r\n  b\u0027 \u003d startingA\u0027;\r\n}\r\nmeans (a\u0027 \u003d \u0027b \u0026 b\u0027 \u003d \u0027a);\r\n\r\n} // end class"
  }
});
formatter.match({
  "location": "StepDefinitions.a_valid_run_unit_is(String)"
});
formatter.result({
  "duration": 141456200,
  "status": "passed"
});
formatter.scenario({
  "line": 141,
  "name": "A variable\u0027s scope encloses the scopes of all its values",
  "description": "\r\nThe relationship of local variables and blocks is consistent with Java. To review: the scope of a variable, which is the set of code statements where values of the variable may be defined or used, extends from the variable\u0027s declaration to the end of the block where it is declared, and includes any nested blocks. A block\u0027s variables must have names that do not shadow those that were already declared in an enclosing scope. This includes method parameter names; however, field names may be shadowed with a new variable name, requiring access to the field to be dot-prefixed with either \u0027super\u0027 or \u0027this\u0027. A separate, non-overlapping, block may use the same name for one of its variables, but having the same name does not indicate any relationship between the variables -- they are entirely separate variables.\r\n\r\nOur example shows an attempt to use a value name that is out of scope.",
  "id": "blocks-delimit-the-scope-of-variable-names;a-variable\u0027s-scope-encloses-the-scopes-of-all-its-values",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 147,
  "name": "an invalid run unit is",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 148,
    "value": "class BlockMeaning4 {\r\n\r\nint a, b;\r\n\r\nvoid swap() {\r\n  int startingA\u0027 \u003d \u0027a;\r\n  { // Here we will save and set b\r\n    int startingB\u0027 \u003d \u0027b;\r\n    b\u0027 \u003d startingA\u0027;\r\n    means(b\u0027 \u003d \u0027a);\r\n  }\r\n  a\u0027 \u003d startingB\u0027; // Oops, the variable startingB is out of scope\r\n}\r\nmeans(a\u0027 \u003d \u0027b \u0026 b\u0027 \u003d \u0027a);\r\n\r\n} // end class"
  }
});
formatter.step({
  "line": 166,
  "name": "an error message contains",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 167,
    "value": "Variable startingB has not been defined in this scope"
  }
});
formatter.match({
  "location": "StepDefinitions.an_invalid_run_unit_is(String)"
});
formatter.result({
  "duration": 2366100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.an_error_message_contains(String)"
});
formatter.result({
  "duration": 61600,
  "status": "passed"
});
});