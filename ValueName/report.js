$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/cowan/Documents/GitHub/TrueJ/Cucumber/Features/Spec Features/a_valueNames.feature");
formatter.feature({
  "line": 1,
  "name": "Value names are decorated variable names (TrueJ 0.1)",
  "description": "\r\nTrueJ directs the programmer\u0027s attention to the changing state of the program\u0027s data as each\r\nstatement is executed. In procedural and object oriented languages like Java*, variables hold the\r\nstate, but the particular state held by those variables is never made explicit. So an important\r\ndifference between TrueJ and Java is that we add a way for each state contained in the variables\r\nto be explicitly represented. And we need to make as few other changes from Java as possible\r\nbecause we want programmers to easily make the transition to focusing more on the state and less\r\non the variables that hold the state.",
  "id": "value-names-are-decorated-variable-names-(truej-0.1)",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 12,
  "name": "Values have names",
  "description": "\r\n  TrueJ represents state by adding a syntax for naming the values\r\n  that are held by variables. We add a distinct decoration to a variable\u0027s\r\n  name for each of the values that it stores, keeping the variable name as\r\n  part of the value name to allow the programmer to control details of the\r\n  procedural programming. Within the scope of each executable, The name of the\r\n  initial value that a variable holds is the variable name pre-decorated with\r\n  an apostrophe, and the name of the ending value is the variable name\r\n  post-decorated with an apostrophe. For example, the initial value of the\r\n  variable z is named \u0027z and the final value is named z\u0027. We can read \u0027z as\r\n  \"initial-z\" and z\u0027 as \"z-final\".\r\n\r\n  Once we make this transition from variable names to value names, we can show facts about program\r\n  state as statements about values. We introduce a new statement, the means-statement to summarize\r\n  the meaning of the preceding operations in terms of facts that have been established in the\r\n  state.",
  "id": "value-names-are-decorated-variable-names-(truej-0.1);values-have-names",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "A valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 31,
    "value": "class Swapper {\r\n\r\nint a, b;\r\n\r\nvoid swap() {\r\n  int startingA\u0027 \u003d \u0027a;\r\n  a\u0027 \u003d \u0027b;\r\n  b\u0027 \u003d startingA\u0027;\r\n  means(startingA\u0027 \u003d \u0027a \u0026\u0026 a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d startingA\u0027);\r\n}\r\nmeans(a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d \u0027a);\r\n\r\n} // end class"
  }
});
formatter.step({
  "line": 47,
  "name": "Notes",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 48,
    "value": "Three comments about TrueJ\u0027s syntax and semantics will help the reader understand the example\r\nprogram above. The first is that in TrueJ, the syntax for the assignment statement is almost\r\nexactly the same as the notation for its semantics. For instance, when making claims about the\r\nprogram state after the assignment:\r\n    a\u0027 \u003d \u0027b;\r\nwe use the state expression:\r\n    a\u0027 \u003d \u0027b\r\nand because they are essentially identical the programmer can choose to read off the meaning of\r\nthe statement instead of its operational action. That is, instead of reading \"copy the value in\r\nvariable b to a\", or \"the variable a gets the value in b\", or \"the variable a now has the same\r\nvalue as the variable b\", or \"the variable a can now be substituted for the expression b in\r\nprior statements\", the programmer can now abandon mechanical metaphors, transient truths about\r\nvariables, and substitution of variables and expressions, and instead think about unchanging\r\ntruths about values, reading off the meaning of the statement \"a\u0027 \u003d \u0027b;\" as \"a-final equals\r\ninitial-b\".\r\n\r\nThe second comment is that TrueJ gives up Java\u0027s ability to include\r\na side-effect-like internal assignment inside an arbitrary expression in\r\nexchange for unifying the syntax of three uses of equality:\r\n\r\n  - equality resulting from an assigment statement\r\n  - equality tests in conditional expressions\r\n  - equality in claims about program state\r\n\r\nThey all use the single equal sign \u0027\u003d\u0027. It will have to be emphasized to new programmers that\r\nthe new value name must be on the left-hand side of an assigment, and no new value names may\r\noccur on the right-hand side. It is an empirical question as to which will weigh the most: the\r\nconfusion caused by this operational vs. semantic asymmetry/symmetry, or the simplified\r\nunderstanding from using the equality symbol to point to the meaning of the assignment. The\r\nuncomfortable itch that some of us feel in overloading the same symbol for these distinct uses\r\nis one clue, but the satisfaction in easily reading off the meaning of the assignment is\r\nanother. I hesitate to begin exploring the other solution, which is to allow the assignment\r\nstatement to be symmetrical, because it moves further down the slippery slope that takes us away\r\nfrom Java.\r\n\r\nThe third, and more dramatic, comment is that working with a consistent name for each value\r\nsimplifies our understanding of the overall program\u0027s meaning. As you might have noted, in the\r\ncode inside the swap() method, the means-statement is wasted verbage:\r\n\r\n    int startingA\u0027 \u003d \u0027a;\r\n    a\u0027 \u003d \u0027b;\r\n    b\u0027 \u003d startingA\u0027;\r\n\r\n    means(startingA\u0027 \u003d \u0027a \u0026\u0026 a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d startingA\u0027);\r\n\r\nIt is simply the meaning of each of the statements, combined with an \"and\". Once we use values\r\ninstead of variables, the semantics of a program\u0027s top-level sequential statements is\r\nconjunction.\r\n\r\nThis brings us closer to our goal of helping programmers think in terms of state as well as\r\noperations because the conjunction of statements over values provides a simple semantics for\r\nunderstanding the cumulative change in state created by those operations. People understand\r\nconjuction, so we will attempt to dispense with a discussion of inference rules for combining\r\nstatements in all but the most advanced discussions of TrueJ. Of course, we appreciate the\r\nclarity that we gain from formal mathematical descriptions of the use of variables or machine\r\nstorage locations during program execution; we only claim that this simpler mathematics is more\r\nhelpful for writing programs.\r\n\r\nFunctional and logic programming languages also focus on values, but at the expense of\r\nincreasing the conceptual distance from the procedural instructions of the programmers mental\r\nmodel of the underlying machine that runs the programs (but see Chisnall, 2018).\r\n\r\nA careful look at the above program also raises the issue of the scope of\r\nthe value names. Within the means-statements we use the initial value \u0027a,\r\neven though that value is no longer present in any variable -- it has been\r\noverwritten by the statement\r\n   a\u0027 \u003d \u0027b;\r\nSo it seems that the scope of a value has to continue after the value ceases to exist, at least\r\nfor logic statements. Should we allow the overwritten value to be used in the logic statements,\r\nbut not the operational statements? We seem to have two uncomfortable options. The first is that\r\nwe make sure that programmers understand that only values that exist can be mentioned in\r\noperational statements, but that values that no longer exist can be mentioned in logic. The\r\nalternative, and the option that TrueJ uses, is to allow the values to be reused in both code\r\nand descriptions of state. We make this explicit in the following scenario."
  }
});
formatter.match({
  "location": "StepDefinitions.a_valid_run_unit_is(String)"
});
formatter.result({
  "duration": 885202900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.notes(String)"
});
formatter.result({
  "duration": 86800,
  "status": "passed"
});
formatter.scenario({
  "line": 126,
  "name": "The scope of a Value name",
  "description": "\r\n  Normally in a procedural language, the value held by a variable disappears\r\n  when you overwrite it with a new value, but not in TrueJ. If you need a value\r\n  whose variable is still in scope, the compiler will make sure the value\r\n  still exists. Obviously, the implementation must keep a copy of any\r\n  overwritten values that are needed for later statements.\r\n\r\n  The link between variables and their values becomes more abstract, but we\r\n  hope to wave that issue away for beginning programmers by saying,\r\n  \"Obviously, the implementation must keep a copy of any overwritten values\r\n  that are needed for later statements\".\r\n\r\n  The reason that we go to the trouble to allow the use of overwritten values in TrueJ is that our\r\n  state-based focus will often require us to make claims about how the current state relates to an\r\n  earlier one, and we don\u0027t want to confuse beginning programmers with a different rule about\r\n  using value names in operational statements vs. using them in claims about state. TrueJ makes\r\n  the scope of overwritten values the same in both logic statements and operational statements by\r\n  introducing the rule that the scope of a value begins with its definition and ends with the end\r\n  of the scope of its variable.\r\n\r\n  This feature embarasses me a little because, above, I was fussy over the conceptual distance of\r\n  functional and logic languages from the procedural nature of the computer, and here we are,\r\n  hiding a variable to hold the copy of the overwritten value and hiding the copy operation\r\n  itself. My only defense is that it seems the best compromise if our primary goal is to give\r\n  equal attention to state and process.\r\n\r\n  The ability to refer back to values that have been overwritten will only simplify program code a\r\n  little, but the readability of programs is so important that this bit of simplification is still\r\n  a worthwhile contribution of TrueJ. At any rate, for some programs, reusing old values does\r\n  wonders. For instance, the semantics of the swap() method becomes so obvious from the code that\r\n  writing it out as a separate means-statement adds useless verbage and detracts from its\r\n  readability; instead, we just let the compiler infer the meaning of the method.",
  "id": "value-names-are-decorated-variable-names-(truej-0.1);the-scope-of-a-value-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 160,
  "name": "A valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 161,
    "value": "class Swapper2 {\r\n\r\nint a, b;\r\n\r\nvoid swap() {\r\n  a\u0027 \u003d \u0027b;\r\n  b\u0027 \u003d \u0027a;   // OK to use value \u0027a because the variable a is still in scope\r\n}\r\n\r\n} // end class"
  }
});
formatter.step({
  "line": 174,
  "name": "Note",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 175,
    "value": "Some other languages gain a similar simplification by allowing assignment of\r\nmultiple values to corresponding variables in a single assignment statement.\r\nFor example,\r\n\r\n  a, b :\u003d b, a;\r\n\r\nwhich also requires a hidden copying of values."
  }
});
formatter.step({
  "line": 185,
  "name": "an invalid run unit is",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 186,
    "value": "class Swapper3 {\r\n\r\nint a, b;\r\n\r\nvoid swap() {\r\n  int startingA\u0027 \u003d \u0027a;\r\n  a\u0027 \u003d \u0027b;\r\n  b\u0027 \u003d startingA\u0027;\r\n}\r\nmeans(startingA\u0027 \u003d \u0027a \u0026\u0026 a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d startingA\u0027);\r\n   // startingA\u0027 value is out of scope here, outside the method\u0027s block,\r\n   // because its variable startingA is declared inside the block\r\n\r\n} // end class"
  }
});
formatter.step({
  "line": 203,
  "name": "an error message contains",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 204,
    "value": "Variable startingA has not been defined in this scope"
  }
});
formatter.match({
  "location": "StepDefinitions.a_valid_run_unit_is(String)"
});
formatter.result({
  "duration": 2122200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.notes(String)"
});
formatter.result({
  "duration": 60700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.an_invalid_run_unit_is(String)"
});
formatter.result({
  "duration": 2469600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.an_error_message_contains(String)"
});
formatter.result({
  "duration": 70700,
  "status": "passed"
});
formatter.scenario({
  "line": 209,
  "name": "Intermediate value names use middle decoration",
  "description": "\r\n  Because the value of a variable may change more than once in a method, a way of naming the\r\n  intermediate values is needed. This is accomplished by appending an apostrophe and additional\r\n  name continuation characters. For instance lovely\u002714, lovely\u0027temp2, or lovely\u0027Mary could all be\r\n  middle-decorated intermediate values of the variable named \"lovely\".\r\n\r\n  We end up with the pleasant conceit that a variable\u0027s pre-execution value is\r\n  pre-decorated, any mid-execution values are mid-decorated, and its post-\r\n  execution value is post-decorated.",
  "id": "value-names-are-decorated-variable-names-(truej-0.1);intermediate-value-names-use-middle-decoration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 220,
  "name": "A valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 221,
    "value": "class AllTrue {\r\n\r\nboolean a, b, c;\r\n\r\nboolean allTrue;\r\n\r\nvoid checkAll() {\r\n  allTrue\u0027reset \u003d true;\r\n  allTrue\u0027thruA \u003d allTrue\u0027reset \u0026\u0026 \u0027a; // \u0026\u0026 is stickier than assignment\r\n  allTrue\u0027thruB \u003d allTrue\u0027thruA \u0026\u0026 \u0027b;\r\n  allTrue\u0027      \u003d allTrue\u0027thruB \u0026\u0026 \u0027c;\r\n}\r\nmeans(allTrue\u0027 \u003d (\u0027a \u0026\u0026 \u0027b \u0026\u0026 \u0027c));    // equality is stickier than \u0026\u0026\r\n\r\n} // end class"
  }
});
formatter.match({
  "location": "StepDefinitions.a_valid_run_unit_is(String)"
});
formatter.result({
  "duration": 367016300,
  "status": "passed"
});
formatter.scenario({
  "line": 240,
  "name": "Using value names allows proving logical statements",
  "description": "\r\n  A means-statement uses value names in fist-order predicate logic statements. It consists of only those things that can be deduced from operational statements and logic statements that occured earlier in the code. From a code execution point of view, by the time that any execution path through the code reaches it, the means-statement must be true.\r\n\r\n  Logic statements are not just for helping programmers understand a program;\r\n  it is a compiler error to have a means-statement that cannot be proven. The\r\n  compiler must only prove valid statements, but cannot be guaranteed to prove\r\n  all valid statements, so the programmer will sometimes need to help the\r\n  prover by providing intermediate steps.\r\n\r\n  In other features, we will have a lot more to say about making automated proofs useful to\r\n  programmers and about the constraints that are placed on a prover when it is part of a compiler.",
  "id": "value-names-are-decorated-variable-names-(truej-0.1);using-value-names-allows-proving-logical-statements",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 253,
  "name": "an invalid run unit is",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 254,
    "value": "class Swapper4 {\r\n\r\nint a, b;\r\n\r\nvoid swap() {\r\n  int startingA\u0027 \u003d \u0027a;\r\n  a\u0027 \u003d \u0027b;\r\n  b\u0027 \u003d startingA\u0027;\r\n}\r\nmeans(a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d \u0027b); // error here\r\n\r\n} // end class"
  }
});
formatter.step({
  "line": 269,
  "name": "an error message contains",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 270,
    "value": "The code does not support the proof of the statement: b\u0027 \u003d \u0027b"
  }
});
formatter.step({
  "line": 275,
  "name": "Notes",
  "keyword": "* ",
  "doc_string": {
    "content_type": "\"",
    "line": 276,
    "value": "Previous Research\r\n\r\nThe use of Tony Hoare\u0027s logic (1969) to prove the correctness of programs often uses proof\r\noutlines, that is, assertions embedded in code -- not like the Java assert-statement, to check for\r\nerrors during program execution, but to aid the construction of a proof of correctness and help\r\nprogrammers see the correctness as they read the code. These assertions were used soon after\r\nHoare\u0027s logic paper, for instance (Hoare, 1971). The name \"proof outline\" seems to have been first\r\nused in publication by Owicki and Gries (1976). Fred Schneider (1995) gives a thorough explanation\r\nof them and summarizes their history. The means-statement of TrueJ was originally developed as a\r\nway to include proof outlines as an integral part of a language. This would balance the lopsided\r\nview of procedural programming languages as just a sequence of operations and encourage the\r\nprogrammer to focus just as much on the state as on the procedural operations. Because the Java\r\nassert-statement has a purely operational meaning, \"means\" was chosen to name the assertions, to\r\ncall attention to the semantics of operations as changes to the state.  But it quickly became\r\nclear that inserting a means-statement between every pair of operations just repeated the meaning\r\nof the operations, and in addition trivially repeated most of the syntax of the operations.\r\nCombined with a reading of Hener (1984), this led to thinking of each operation as having a\r\npredicate-calculus meaning, which led to backfitting the variable decorators from the\r\nmeans-statements into the operations in order to expose the fact that operations are also\r\nexpressions in the predicate-calculus, which only worked when a naming convention was found that\r\ncompletely distinguished value names from variable names. This led to code syntax that encouraged\r\na statement-by-statement focus on the changing state of the executing program. Non-operational\r\nlogic statements are only needed in TrueJ when the facts that are stated by the operations need to\r\nbe clarified, summarized, or restated as new concepts.\r\n\r\nAuxiliary variables, also called history variables or fixed variables, were introduced by Clint\r\n(???) and have become a standard part of proving program correctness (Hoare, 1969; Gries, 19??;\r\nDijkstra, ????). The value of an auxiliary variable never changes; therefore, in our terminology,\r\nauxiliary variables are value names that are lexically independent of the variables that hold, or\r\nonce held, the value. Alternatively, the value names of TrueJ could be considered to be a\r\nconvention for naming and using auxiliary variables. However, previous work has only used\r\nauxiliary variables in comments and proofs of correctness, whereas value names are included as\r\npart of the TrueJ syntax and, as well as aiding in proofs, are used to draw the attention of the\r\nprogrammer to changes in state as part of the normal coding process.\r\n\r\nDecorated variables have been used to identify a particular value of the variable by almost every\r\ncomputer scientist who has struggled with program semantics (and long before that by\r\nmathematicians and physicists describing change). A post-decorated variable name has been used to\r\ndenote the initial value of a variable by some and the final value by others, leaving the other\r\nvalue to be denoted by the variable name without any decoration. The Eifel language () also\r\nincludes a syntax for the initial value of a variable in post-conditions of methods. This\r\noverloaded use of one name for both a variable and one of its values causes no problems when\r\ndescribing a single state of the program. In order to describe states across multiple points in\r\nthe code, TrueJ clearly distinguishes between variables and values and brings the decoration\r\ntactic into the syntax of the language.\r\n\r\nWard Maurer found a way to use the simple conjunction of statements in his\r\nmodification index method (1977). He noted the advantage of post-decorating\r\nstorage location names and variable names with integers to distinguish all the\r\nvalues of a variable while proving program correctness. The consistency of the\r\nrelationship between a decorated name and a value throughout a program allowed\r\nMaurer to simplify construction of verification conditions for proofs using\r\nordinary conjunction. Of course, program proof and program semantics are\r\nintertwined concepts, but Mauer never seems to have reflected on the\r\nimplications of his work for program semantics. As in Maurer\u0027s work, TrueJ\r\ntakes advantage of the use of values in interacting with a prover.\r\n\r\nSingle assignment languages identify the concepts of variable and value by requiring a new\r\nvariable name at each assignment (Tesler and Enea, 1968), whereas TrueJ requires a new value name\r\nto be associated with a variable at each assignment. Some single assignment languages allow\r\nstatements to be entered in any order, since unique variable names can be used to sort statements\r\ninto a correct execution order, but TrueJ requires the programmer to specify the execution order\r\nand merely checks that no names are used out of order.\r\n\r\nThe static single assignment (SSA) intermediate representation for languages assigns a modified\r\nvariable name to every unique value of a variable. It is used in compiler writing (Rosen, et. al,\r\n1988) to simplify static analysis for code optimization. One might think of TrueJ as repurposing\r\nSSA for program understanding in order to simplify the job of programmers instead of compilers.\r\n\r\nEric Hehner showed that programs are predicates (Hehner, 19??; Hoare and Hanna, 19??; Hoare,\r\n19??). TrueJ explores this idea with a first-order predicate logic that uses only value names,\r\nabandoning the complications of programming variables that can change value in the middle of\r\nsolving a problem.\r\n\r\nHoare logic and the \"programs are predicates\" approach lay a firm mathematical foundation for\r\nunderstanding programming variables. The tradition in this type of mathematical analysis is to use\r\nthe same name for a variable and for one of its values, which works well for stating predicates\r\nthat only refer to a single state, but complicates the formalization of assigment and of\r\nsequential composition of separately analyzed program sections. The added complication for\r\nsequential composition is that renaming is required in order to syncronize the variable/value\r\nnames after one operation with the beginning of the next, which requires additional proof steps.\r\nThe use of value names in TrueJ makes this additional mental baggage disappear. However, as we\r\nexplore more features of TrueJ, we will require the programmer to name the initial and final\r\nvalues for variables that change within a method or programming construct, and there is a sense in\r\nwhich this use of TrueJ\u0027s value names are simply a way of solving the equations for sequential\r\ncomposition that are given by Hehner and Hoare, which is as we expect since its all just\r\nmathematics. We merely wish to pose the empirical hypothesis that TrueJ\u0027s notation will help the\r\nprogrammer see what is true about the state as the program executes, that is, see what the program\r\nmeans.\r\n\r\n\r\nConclusion\r\n\r\nTrueJ provides a syntax for naming values as well as variables in a\r\nJava-like programming language. Because the syntax of an operation is\r\nexpressed with named constant values, we do not need to invent a special logic\r\nto help us keep track of the changing values held by variables. This allows\r\nthe programmer to see that every operation is itself a logic statement which\r\nrelates the state before the operation to the state after. And because\r\noperations are predicates, we are able to see that the meaning of a sequence\r\nof operations is simply their conjunction.\r\n\r\nIt can be hoped that drawing the attention of the programmer to changes in state with value names\r\nand integrating a prover into the compiler will lead to a practical fulfillment of the idea of\r\nconstructing programs in parallel with their proofs of correctness (?Dijktra?, ????). Indeed, it\r\nlooks like they are they are one and the same task, and TrueJ can be thought of as a syntax that\r\nshows that programs are proofs (????).\r\n\r\nAh, well, we do realize that we have demonstrated this grand idea only for those programs that are\r\na simple sequence of assignments -- we will cover the complications introduced by control\r\nstructures, method calls, object orientation, aliasing, concurrency, proofs of correctness, and\r\nthe use of interfaces for program specification in separate feature descriptions.\r\n\r\n\r\nReferences\r\n\r\n\r\n  David Chisnall. 2018. C Is Not a Low-level Language. Queue Vol. 16, No. 2, April, 2018. DOI: https://doi.org/10.1145/3212477.3212479\r\n\r\n  Gries, ...\r\n\r\n  Hehner, A Practical Theory of Programming, 1984.\r\n\r\n  C. A. R. Hoare, \"An Axiomatic Basis for Computer Programming\",\r\n  Communications of the ACM, Vol. 12, No. 10, Oct., 1969.\r\n\r\n  C. A. R. Hoare and F. K. Hanna, \"Programs are Predicates\", Philosophical\r\n  Transactions of the Royal Society of London. Series A, Mathematical and\r\n  Physical Sciences, Vol. 312, No. 1522, Mathematical Logic and Programming\r\n  Languages (Oct. 1, 1984), pp. 475-489\r\n\r\n  C. A. R. Hoare, \"Proof of a program: Find\", Communications of the ACM, Vol.\r\n  14, No. 1, Jan., 1971.\r\n\r\n  W. D. Maurer. 1977. \"The modification index method of generating\r\n  verification conditions\". In Proceedings of the 15th annual Southeast\r\n  regional conference (ACM-SE 15). ACM, New York, NY, USA, 426-440.\r\n  DOI\u003dhttp://dx.doi.org/10.1145/1795396.1795456\r\n\r\n  Susan Owicki and David Gries, \"An axiomatic proof technique for parallel\r\n  programs I\", Acta Informatica, Vol. 6, pp. 319-340, 1976.\r\n\r\n  Barry Rosen; Mark N. Wegman; F. Kenneth Zadeck, 1988. \"Global value numbers\r\n  and redundant computations\". In Proceedings of the 15th ACM SIGPLAN-SIGACT\r\n  symposium on Principles of programming languages. ACM, New York, NY, USA,\r\n  12-27. DOI\u003dhttp://dx.doi.org/10.1145/73560.73562\r\n\r\n  Fred B. Schneider, \"Notes on Proof Outline Logic\", Technical Report, Cornell\r\n  University, Ithaca, NY, 1995.\r\n\r\n  L. G. Tesler and H. J. Enea. 1968. A language design for concurrent\r\n  processes. In Proceedings of the April 30--May 2, 1968, spring joint\r\n  computer conference (AFIPS \u002768 (Spring)). ACM, New York, NY, USA, 403-408.\r\n  DOI\u003dhttp://dx.doi.org/10.1145/1468075.1468134"
  }
});
formatter.step({
  "line": 433,
  "name": "Note",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 434,
    "value": "Java is a trademark of Oracle, Inc.\r\n\r\nTrueJ depends upon the considerable orderly thinking that underlies\r\nthe complexity of the Java language. Many thanks to the creators of Java, to\r\nthe Sun and Oracle corporations for developing and supporting it, and to the\r\nJava Community for their work through the years.\r\n\r\nCopyright (c) 2017, George S. Cowan"
  }
});
formatter.match({
  "location": "StepDefinitions.an_invalid_run_unit_is(String)"
});
formatter.result({
  "duration": 460487400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.an_error_message_contains(String)"
});
formatter.result({
  "duration": 61500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.notes(String)"
});
formatter.result({
  "duration": 45200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.notes(String)"
});
formatter.result({
  "duration": 46400,
  "status": "passed"
});
});