$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/cowan/Documents/GitHub/TrueJ/Cucumber/Features/Spec Features/b_IfStatement.feature");
formatter.feature({
  "line": 1,
  "name": "The if statement",
  "description": "\r\nThe if-statement control structure provides conditional operations. We postpone discussing the\r\nswitch/case statement until we have introduced the basics of the TrueJ language.",
  "id": "the-if-statement",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "The if-statement allows alternative definitions for values",
  "description": "\r\n  A value name has only one value for the whole range of its scope, but that value may be selected\r\n  from different options, depending upon the runtime conditions of the state.",
  "id": "the-if-statement;the-if-statement-allows-alternative-definitions-for-values",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "A valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 12,
    "value": "class Rates {\r\n\r\ndouble rate;\r\n\r\ndouble standardRate\u0027 \u003d 0.05;\r\ndouble discountRate\u0027 \u003d 0.15;\r\n\r\nboolean hasDiscount;\r\n\r\nvoid setRate() {\r\n  if (\u0027hasDiscount) rate\u0027 \u003d discountRate\u0027;\r\n               else rate\u0027 \u003d standardRate\u0027;\r\n\r\n  // a natural logic for if-then-else statements\r\n  means ( (   \u0027hasDiscount \u003d\u003d\u003e rate\u0027 \u003d discountRate\u0027 )\r\n        \u0026 ( ! \u0027hasDiscount \u003d\u003d\u003e rate\u0027 \u003d standardRate\u0027 )\r\n        );\r\n}\r\n// an equivalent logic\r\nmeans ( (   \u0027hasDiscount \u0026 rate\u0027 \u003d discountRate\u0027)\r\n      | ( ! \u0027hasDiscount \u0026 rate\u0027 \u003d standardRate\u0027)\r\n      );\r\n\r\n} // end class"
  }
});
formatter.match({
  "location": "StepDefinitions.a_valid_run_unit_is(String)"
});
formatter.result({
  "duration": 993522000,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "A valid value name has a definition in each branch of a conditional",
  "description": "\r\n  For a value name to be available to an operation or logic statement later in its scope, it must\r\n  be defined along all paths to that statement. For an if-statement, this means that it must be\r\n  defined in both branches. And we are able to issue helpful error messages because they point to\r\n  the branch that omits a value name, or misspells it, or attempts to define a new name that was\r\n  not in prior branches.\r\n\r\n  Although we require the value names to be the same from branch to branch, we do not require them\r\n  to be defined in the same order.\r\n\r\n  Sometimes a value name will be needed in only one branch. When this happens, one approach is for\r\n  the programmer to use a new local variable instead. Otherwise the programmer will be required to\r\n  define that value name in another branch solely because it was needed in this branch. However,\r\n  in the other branch, if the programmer writes this otherwise unneeded definition as a trivial\r\n  assignment of the latest value to the needed value name, the compiler will at least recognize\r\n  that it doesn\u0027t need to generate any executablecode to establish the truth of the assignment\u0027s\r\n  semantics, and that semantics will still be available for use in status expressions following\r\n  the conditional statement.\r\n\r\n  SHOULD WE DO THIS INSTEAD?\r\n    Ignore an ill-defined value name until an attempt is made to reference it. The advantage of\r\n    this method is that value names in if-statements do not require trivial self-assignments in\r\n    other branches. The disadvantage is that the programmer may attempt to use a value name later\r\n    and be surprised that the preceding and previously error-free code does not allow it to be\r\n    used. But perhaps well written error messages would solve this problem.\r\n\r\n    (As an Implementation note, checking whether a value is defined on all branches would still be\r\n    required, and issuing a good error message to help the programmer locate a problem would\r\n    require saving the same information that is now reported.)",
  "id": "the-if-statement;a-valid-value-name-has-a-definition-in-each-branch-of-a-conditional",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 70,
  "name": "a valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 71,
    "value": "class Swapper_2 {\r\n\r\nint a;\r\nint b;\r\n\r\nvoid validSwap() {\r\n  if (\u0027a \u003d \u0027b) {\r\n    a\u0027 \u003d \u0027a; // the compiler generates a null operation for the assignments\r\n    b\u0027 \u003d \u0027b;\r\n  } else {\r\n    a\u0027 \u003d \u0027b;\r\n    b\u0027 \u003d \u0027a;\r\n  }\r\n}\r\nmeans(a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d \u0027a);\r\n\r\n} // end class"
  }
});
formatter.step({
  "line": 91,
  "name": "a valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 92,
    "value": "class Swapper_3 {\r\n\r\nint a;\r\nint b;\r\n\r\nvoid validSwap() {\r\n  if (\u0027a \u003d \u0027b) {\r\n    a\u0027temp1 \u003d \u0027b;\r\n    a\u0027temp2 \u003d a\u0027temp1;\r\n    b\u0027temp1 \u003d \u0027a;\r\n    b\u0027temp2 \u003d b\u0027temp1;\r\n  } else {\r\n    a\u0027temp2 \u003d \u0027b; // note the different order of assignment here to the variables a and b\r\n    a\u0027temp1 \u003d a\u0027temp2;\r\n    b\u0027temp2 \u003d \u0027a;\r\n    b\u0027temp1 \u003d b\u0027temp2;\r\n  }\r\n  a\u0027 \u003d a\u0027temp2;\r\n  b\u0027 \u003d b\u0027temp2;\r\n}\r\nmeans(a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d \u0027a);\r\n\r\n} // end class"
  }
});
formatter.step({
  "line": 118,
  "name": "an invalid run unit is",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 119,
    "value": "class Rates_1X {\r\n\r\ndouble rate;\r\ndouble reportRate;\r\n\r\ndouble standardRate\u0027 \u003d 0.05;\r\ndouble discountRate\u0027 \u003d 0.15;\r\n\r\nboolean hasDiscount;\r\n\r\nvoid setRate() {\r\n  rate\u0027standard \u003d standardRate\u0027;\r\n  if (\u0027hasDiscount)\r\n    rate\u0027 \u003d discountRate\u0027;\r\n  else\r\n    ; // ERROR: attempting to let rate variable default to rate\u0027standard previous value\r\n\r\n  reportRate\u0027 \u003d rate\u0027; /* This is also an error because rate\u0027 is not defined in all paths\r\n                        * but it is not discovered here */\r\n}\r\nmeans ( (   \u0027hasDiscount \u0026 reportRate\u0027 \u003d discountRate\u0027)\r\n      | ( ! \u0027hasDiscount \u0026 reportRate\u0027 \u003d standardRate\u0027)\r\n          /* this last disjunct would also be an error because there is no proof\r\n            * that reportRate\u0027 \u003d standardRate\u0027 when \u0027hasDiscount \u003d false,\r\n            * but it is not found because the else-error stops the proof attempt */\r\n      );\r\n\r\n} // end class"
  }
});
formatter.step({
  "line": 149,
  "name": "an error message contains",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 150,
    "value": "rate\u0027 was not defined in the else-clause"
  }
});
formatter.match({
  "location": "StepDefinitions.a_valid_run_unit_is(String)"
});
formatter.result({
  "duration": 215761100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.a_valid_run_unit_is(String)"
});
formatter.result({
  "duration": 854774400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.an_invalid_run_unit_is(String)"
});
formatter.result({
  "duration": 3212200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.an_error_message_contains(String)"
});
formatter.result({
  "duration": 99000,
  "status": "passed"
});
formatter.scenario({
  "line": 154,
  "name": "A more complex example - ThreeSort",
  "description": "\r\n  This version of sorting three items minimizes copying in each case.\r\n\r\n  The means-statements are used to keep track of the state determined so far. Clearly we have more\r\n  work to do to make this readable; conjunctive comparison relations like a\u0027 \u003c b\u0027 \u003c c\u0027 would help\r\n  a lot, and because we have not yet presented a theory of comparisons at all, we were not able to\r\n  write means-statements with obvious simplifications, such as \u0027c \u003c \u0027b instead of !(\u0027b \u003c\u003d \u0027c).\r\n\r\n  The implicit local variable that TrueJ creates is often helpful, but in one case we need to use\r\n  a different ordering of the code than our preferred one to avoid creating two implicit local\r\n  variables.",
  "id": "the-if-statement;a-more-complex-example---threesort",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 167,
  "name": "A valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 168,
    "value": "class Triplet {\r\n\r\nint a;\r\nint b;\r\nint c;\r\n\r\nvoid threeSort() {\r\n  if (\u0027a \u003c\u003d \u0027b) {\r\n    if (\u0027b \u003c\u003d \u0027c) { // already in order\r\n      a\u0027 \u003d \u0027a;                           // no-ops generated for self assignment\r\n      b\u0027 \u003d \u0027b;\r\n      c\u0027 \u003d \u0027c;\r\n    } else {\r\n      if (\u0027a \u003c\u003d \u0027c) {\r\n        means \u0027a \u003c\u003d \u0027c \u0026 !(\u0027b \u003c\u003d \u0027c);    // \u0027a \u003c\u003d \u0027c \u003c \u0027b\r\n        a\u0027 \u003d \u0027a;\r\n        b\u0027 \u003d \u0027c;\r\n        c\u0027 \u003d \u0027b;\r\n      } else {\r\n        means !(\u0027a \u003c\u003d \u0027c) \u0026 \u0027a \u003c\u003d \u0027b;    // \u0027c \u003c \u0027a \u003c\u003d \u0027b);\r\n        a\u0027 \u003d \u0027c;                         // \u0027a is saved in an implicit variable here\r\n        c\u0027 \u003d \u0027b;                         // a,c,b assignment here to avoid implicit \u0027b variable\r\n        b\u0027 \u003d \u0027a;\r\n      }\r\n    }\r\n  } else { // \u0027b \u003c \u0027a\r\n    if (\u0027a \u003c\u003d \u0027c) { // \u0027b \u003c \u0027a \u003c\u003d \u0027c\r\n      means ( !(\u0027a \u003c\u003d \u0027b ) \u0026\u0026 \u0027a \u003c\u003d \u0027c); // \u0027b \u003c \u0027a \u003c\u003d \u0027c);\r\n      a\u0027 \u003d \u0027b;\r\n      b\u0027 \u003d \u0027a;\r\n      c\u0027 \u003d \u0027c;\r\n    } else {\r\n      if (\u0027b \u003c\u003d \u0027c) {\r\n        means (\u0027b \u003c\u003d \u0027c \u0026\u0026 !(\u0027a \u003c\u003d \u0027c)); // \u0027b \u003c\u003d \u0027c \u003c \u0027a\r\n        a\u0027 \u003d \u0027b;\r\n        b\u0027 \u003d \u0027c;\r\n        c\u0027 \u003d \u0027a;\r\n      } else {\r\n        means ( !(\u0027b \u003c\u003d \u0027c) \u0026\u0026 !(\u0027a \u003c\u003d \u0027b)); // \u0027c \u003c \u0027b \u003c \u0027a);\r\n        a\u0027 \u003d \u0027c;\r\n        b\u0027 \u003d \u0027b;\r\n        c\u0027 \u003d \u0027a;\r\n      }\r\n    }\r\n  }\r\n}\r\n// means (a\u0027 \u003c\u003d b\u0027 \u0026\u0026 b\u0027 \u003c\u003d c\u0027);  // requires theory of comparisons\r\n\r\n} // end class"
  }
});
formatter.match({
  "location": "StepDefinitions.a_valid_run_unit_is(String)"
});
formatter.result({
  "duration": 588936300,
  "status": "passed"
});
formatter.scenario({
  "line": 220,
  "name": "An if-then-statement may not define value names",
  "description": "\r\n  The then-only version of the if-statement becomes much less useful because value names must be\r\n  defined under all cases. However, a single branch of an if statement may still be used as long\r\n  as no value names are defined. Perhaps writing to a log file would be a good example, but even\r\n  that would not apply if you wanted the accuracy of the log file to be part of the specification.",
  "id": "the-if-statement;an-if-then-statement-may-not-define-value-names",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 227,
  "name": "an invalid run unit is",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 228,
    "value": "class Swapper_1 {\r\n\r\nint a;\r\nint b;\r\n\r\n/** We (invalidly) attempt to avoid swapping the two values when they are equal. */\r\nvoid invalidSwap() {\r\n  if (\u0027a !\u003d \u0027b) {\r\n    a\u0027 \u003d \u0027b;\r\n    b\u0027 \u003d \u0027a;\r\n  }\r\n}\r\nmeans(a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d \u0027a);\r\n\r\n} // end class"
  }
});
formatter.step({
  "line": 245,
  "name": "an error message contains",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 246,
    "value": "a\u0027 was not defined in the else-clause"
  }
});
formatter.step({
  "line": 249,
  "name": "an error message contains",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 250,
    "value": "b\u0027 was not defined in the else-clause"
  }
});
formatter.match({
  "location": "StepDefinitions.an_invalid_run_unit_is(String)"
});
formatter.result({
  "duration": 1867500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.an_error_message_contains(String)"
});
formatter.result({
  "duration": 100600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.an_error_message_contains(String)"
});
formatter.result({
  "duration": 68000,
  "status": "passed"
});
});