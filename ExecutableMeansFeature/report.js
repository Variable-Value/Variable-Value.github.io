$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/cowan/Documents/GitHub/TrueJ/Cucumber/Features/Spec Features/e_status.feature");
formatter.feature({
  "line": 1,
  "name": "Status Statements for Executable code",
  "description": "\r\nSeveral TrueJ statements can summarize the state required or created by the code as it executes.\r\nThese are the given-statement, the means-statement, the lemma, and the conjecture. The use of\r\nstatus statements to constrain or summarize the state of an object between method executions is\r\ncovered in another feature.\r\n\r\nTODO: Add tests for the lemma.\r\nTODO: Add tests for the given statement.\r\nTODO: Add tests for the conjecture.",
  "id": "status-statements-for-executable-code",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 12,
  "name": "A block forgets operations from before a means statement",
  "description": "\r\n  To ensure that the programmer can rely on the means statement to understand previous code, the compiler forgets all of the block\u0027s operations from above the means. The compiler translates all its operational code for execution, of course, but after a means statement it only allows status statements to use the facts extablished by the means statement.\r\n\r\n  There are more issues with means statements that we will discuss along with the other TrueJ status statements. But here is an example that shows an error caused by an attempt to refer back to a forgotten fact.",
  "id": "status-statements-for-executable-code;a-block-forgets-operations-from-before-a-means-statement",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "an invalid run unit is",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 19,
    "value": "class BlockMeaning3 {\r\n\r\nint a, b;\r\n\r\nvoid swap() {\r\n  int startingA\u0027 \u003d \u0027a;\r\n  a\u0027 \u003d \u0027b;\r\n  means (a\u0027 \u003d \u0027b);          // Oops, we are now forgetting that startingA\u0027 \u003d \u0027a\r\n  b\u0027 \u003d startingA\u0027;          // We generate code, but we don\u0027t know what that code means\r\n  means(a\u0027 \u003d \u0027b \u0026 b\u0027 \u003d \u0027a); // So we can\u0027t see that    b\u0027\u003dstartingA\u0027  \u003d\u003d\u003e  b\u0027\u003d\u0027a\r\n}\r\n\r\n} // end class"
  }
});
formatter.step({
  "line": 34,
  "name": "an error message contains",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 35,
    "value": "The code does not support the proof of the statement: b\u0027 \u003d \u0027a"
  }
});
formatter.match({
  "location": "StepDefinitions.an_invalid_run_unit_is(String)"
});
formatter.result({
  "duration": 892232400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.an_error_message_contains(String)"
});
formatter.result({
  "duration": 272799,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "The compiler remembers type information for a variable after a means statement",
  "description": "\r\nTODO: Create code to show success and falure because it remembers the type of a variable.\r\n\r\nBecause the scope of a variable reaches to the end of the block, new values can be assigned to it\r\nafter a means statement. To ensure that those values have the correct type, the type of the\r\nvariable is remembered after a means statement.",
  "id": "status-statements-for-executable-code;the-compiler-remembers-type-information-for-a-variable-after-a-means-statement",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.scenario({
  "line": 47,
  "name": "The compiler remembers facts from surrounding blocks after a means statement",
  "description": "",
  "id": "status-statements-for-executable-code;the-compiler-remembers-facts-from-surrounding-blocks-after-a-means-statement",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "a valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 50,
    "value": "class BlockMeaning5 {\r\n\r\nint a, b;\r\n\r\nvoid swap() {\r\n  int startingA\u0027 \u003d \u0027a;\r\n  { int startingB\u0027 \u003d \u0027b;\r\n    a\u0027 \u003d startingB\u0027;\r\n    means (a\u0027 \u003d \u0027b);\r\n    b\u0027 \u003d startingA\u0027;\r\n    means (a\u0027 \u003d \u0027b \u0026 b\u0027 \u003d \u0027a);\r\n  }\r\n}\r\n\r\n} // end class"
  }
});
formatter.match({
  "location": "StepDefinitions.a_valid_run_unit_is(String)"
});
formatter.result({
  "duration": 165566101,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Object fields that are modified must have a final value for security",
  "description": "\r\nTODO: Code the examples.\r\n\r\nBecause the means-statement is expected to summarize the code above it, a security review should\r\nbe possible by looking only at means-statements where they exist. To prevent malicious or\r\naccidental ommision of modifications of an object, TrueJ requires that a means-statement must\r\ndefine the value of any fields that are modified in the code above it. We allow lenient security\r\nfor a field with little security implications, such as a usage counter or log, by marking it with\r\nthe lenient-modifier.",
  "id": "status-statements-for-executable-code;object-fields-that-are-modified-must-have-a-final-value-for-security",
  "type": "scenario",
  "keyword": "Scenario"
});
});