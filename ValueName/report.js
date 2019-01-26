$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/cowan/Documents/GitHub/cowang-test/github.io/TrueJ/Cucumber/Features/aa_valueNames.feature");
formatter.feature({
  "line": 1,
  "name": "Value names are decorated variable names (T Language 0.1)",
  "description": "\r\nThe T Language attempts to direct the programmer\u0027s attention to the state of\r\nthe program information as each step of a T program is executed. In procedural\r\nand object oriented languages like Java*, variables hold the state, but the\r\nparticular state held by those variables is never made explicit. So\r\nalthough it is a strong principle of the T Language that it diverges from Java\r\nonly when this attention to state requires it, we immediately face a major\r\nchange: we must add a way for each state contained in the variables to be\r\nexplicitly represented. And we need to make as few other changes as possible\r\nbecause we want programmers to easily make the transition to focusing more on\r\nthe state and less on the variables that hold the state.",
  "id": "value-names-are-decorated-variable-names-(t-language-0.1)",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 15,
  "name": "Values have names",
  "description": "\r\n  The T language represents state by adding a syntax for naming the values\r\n  that are held by variables. We add a distinct decoration to a variable\u0027s\r\n  name for each of the values that it stores, keeping the variable name as\r\n  part of the value name to allow the programmer to control details of the\r\n  procedural programming. Within each executable scope, The name of the\r\n  initial value that a variable holds is the variable name pre-decorated with\r\n  an apostrophe, and the name of the ending value is the variable name\r\n  post-decorated with an apostrophe. For example, the initial value of the\r\n  variable z is named \u0027z and the final value is named z\u0027. We can read \u0027z as\r\n  \"initial-z\" and z\u0027 as \"z-final\".\r\n\r\n  Once we make this transition from variable names to value names, we can show\r\n  facts about program state as statements about values. We introduce the\r\n  means-statement to summarize the meaning of the preceding operations in\r\n  terms of facts that have been established in the state.",
  "id": "value-names-are-decorated-variable-names-(t-language-0.1);values-have-names",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "A valid T Language run unit is",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 34,
    "value": "class Swapper {\r\n\r\nint a, b;\r\n\r\nvoid swap() {\r\n  int startingA\u0027 \u003d \u0027a;\r\n  a\u0027 \u003d \u0027b;\r\n  b\u0027 \u003d startingA\u0027;\r\n  means(startingA\u0027 \u003d \u0027a \u0026\u0026 a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d startingA\u0027);\r\n}\r\nmeans(a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d \u0027a);\r\n\r\n} // end class"
  }
});
formatter.step({
  "line": 50,
  "name": "Notes",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 51,
    "value": "Three comments about the T Language syntax and semantics will help the\r\nreader understand the example program above. The first is that in the T\r\nLanguage, the syntax for the assignment command is almost exactly the same\r\nas the notation for its semantics. For instance, when making claims about\r\nthe program state after the assignment command:\r\n    a\u0027 \u003d \u0027b;\r\nwe use the state expression:\r\n    a\u0027 \u003d \u0027b\r\nand the programmer can choose to read off the meaning of the command instead\r\nof its operational action. That is, instead of reading \"copy the value in\r\nvariable b to a\", or \"the variable a gets the value in b\", or \"the variable\r\na now has the same value as the variable b\", or \"the variable a can now be\r\nsubstituted for the expression b in prior statements\", the programmer can\r\nnow abandon mechanical metaphors, transient truths about variables, and\r\nsubstitution of variables and expressions, and instead think about\r\nunchanging truths about values, reading off the meaning of the command as\r\n\"a-final equals initial-b\".\r\n\r\nThe second comment is that the T Language gives up Java\u0027s ability to include\r\na side-effect-like internal assignment inside an arbitrary expression in\r\nexchange for unifying the syntax of three uses of equality:\r\n\r\n  - equality resulting from an assigment statement\r\n  - equality tests in conditional expressions\r\n  - equality in claims about program state\r\n\r\nThey all use the single equal sign \u0027\u003d\u0027. It will have to be emphasized to new\r\nprogrammers that the new value name must be on the left-hand side of an\r\nassigment, and no new value names may occur on the right-hand side. It is an\r\nempirical question as to which will count for the most: the confusion caused\r\nby the asymmetry of the assignment command or the simplified understanding\r\nfrom using the equality symbol to point to the meaning of the assignment;\r\nthe uncomfortable itch that some of us feel in overloading the same symbol\r\nfor two semantically distinct uses is one clue, but the satisfaction in\r\neasily reading off the meaning of the assignment is another. I hesitate to\r\nbegin exploring the other solution, which is to allow the assigment\r\nstatement to be symmetrical, because it moves down a slippery slope that\r\ntakes us further and further from Java: we could also easily solve a linear\r\nequation in the compiler as long as only one new value name is introduced;\r\nin fact we could easily solve common non-linear equations; in fact, we could\r\nsolve multiple simultaneous equations for the values of multiple new value\r\nnames; but this interesting new language is very distant from procedural\r\nprogramming in Java. So, at least for the time being, new vaue names are on\r\nthe left-hand side of an assignment.\r\n\r\nThe third, and more dramatic, comment is that working with a consistent name\r\nfor each value simplifies our understanding of the program\u0027s meaning. As\r\nyou might have noted, in the code inside the swap() method, the means-\r\nstatement is wasted verbage:\r\n\r\n    int startingA\u0027 \u003d \u0027a;\r\n    a\u0027 \u003d \u0027b;\r\n    b\u0027 \u003d startingA\u0027;\r\n\r\n    means(startingA\u0027 \u003d \u0027a \u0026\u0026 a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d startingA\u0027);\r\n\r\nIt is simply the meaning of each of the statements, combined with an \"and\".\r\nOnce we use values instead of variables, program semantics is conjunction.\r\n\r\nThis brings us closer to our goal of helping programmers think in terms of\r\nstate as well as operations because the conjunction of statements over\r\nvalues provides a simple semantics for understanding the cumulative change in state created by\r\nthose operations. People understand conjuction, so we will attempt to dispense with a discussion\r\nof inference rules for combining statements in all but the most advanced discussions of the T\r\nlanguage. Of course, we appreciate the clarity that we have been given by formal mathematical\r\ndescriptions of how that conjunctive understanding is complicated when we focus on programming\r\nvariables or machine storage locations during program execution; we only claim that this simpler\r\nmathematics is more helpful for writing programs.\r\n\r\nFunctional and logic programming languages also focus on values, but at the\r\nexpense of increasing the conceptual distance from the procedural\r\ninstructions of the programmers mental model of the underlying machine that runs the programs\r\n(but see Chisnall, 2018).\r\n\r\nA careful look at the above program also raises the issue of the scope of\r\nthe value names. Within the means-statements we use the initial value \u0027a,\r\neven though that value is no longer present in any variable -- it has been\r\noverwritten by the statement\r\n   a\u0027 \u003d \u0027b;\r\nSo it seems that the scope of a value has to continue after the value ceases\r\nto exist, at least for logic statements. Should we allow the overwritten\r\nvalue to be used in the logic statements, but not the command statements? We\r\nseem to have two uncomfortable options. The first is that we make sure that\r\nprogrammers understand that only values that exist can be mentioned in\r\ncommands, but that values that no longer exist can be mentioned in logic.\r\nThe alternative, and the option that the T language uses, is to allow the\r\nvalues to be reused in both code and descriptions of state. We make this\r\nexplicit in the following scenario."
  }
});
formatter.match({
  "location": "StepDefinitions.a_valid_T_Language_run_unit_is(String)"
});
formatter.result({
  "duration": 756083700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.notes(String)"
});
formatter.result({
  "duration": 87000,
  "status": "passed"
});
formatter.scenario({
  "line": 143,
  "name": "The scope of a Value name",
  "description": "\r\n  Normally in a procedural language, the value held by a variable disappears\r\n  when you overwrite it with a new value, but not in T. If you need a value\r\n  whose variable is still in scope, the compiler will make sure the value\r\n  still exists. Obviously, the implementation must keep a copy of any\r\n  overwritten values that are needed for later commands.\r\n\r\n  The link between variables and their values becomes more abstract, but we\r\n  hope to wave that issue away for beginning programmers by saying,\r\n  \"Obviously, the implementation must keep a copy of any overwritten values\r\n  that are needed for later commands\".\r\n\r\n  The reason that we go to the trouble to allow the use of overwritten values\r\n  in the T Language is that our state-based focus will often require us to\r\n  make claims about how the current state relates to an earlier one, and we\r\n  don\u0027t want to confuse beginning programmers with a different rule about\r\n  using value names in commands vs. using them in claims about state. The T\r\n  language makes the scope of overwritten values the same in both logic\r\n  statements and command statements by introducing the rule that the name of a\r\n  value has a scope that begins with its definition and ends with the end of\r\n  the scope of its variable\u0027s name.\r\n\r\n  This feature embarasses me a little because, above, I was fussy over the conceptual\r\n  distance of functional and logic languages from the procedural nature of the\r\n  computer, and here we are, hiding a variable to hold the copy of the\r\n  overwritten value and hiding the copy operation itself. My only defense is\r\n  that it seems the best compromise if our primary goal is to give equal attention to state and process.\r\n\r\n  The ability to refer back to values that have been overwritten will only simplify program code a\r\n  little, but the readability of programs is so important that this bit of simplification is still\r\n  a worthwhile contribution of the T language. At any rate, for some programs, reusing old values\r\n  does wonders. For instance, the semantics of the swap() method becomes so obvious from the code\r\n  that writing it out as a separate means-statement adds useless verbage and detracts from its\r\n  readability; instead, we just let the compiler infer the meaning of the method.",
  "id": "value-names-are-decorated-variable-names-(t-language-0.1);the-scope-of-a-value-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 179,
  "name": "A valid T Language run unit is",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 180,
    "value": "class Swapper2 {\r\n\r\nint a, b;\r\n\r\nvoid swap() {\r\n  a\u0027 \u003d \u0027b;\r\n  b\u0027 \u003d \u0027a;   // OK to use value \u0027a because the variable a is still in scope\r\n}\r\n\r\n} // end class"
  }
});
formatter.step({
  "line": 193,
  "name": "Note",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 194,
    "value": "Some other languages gain a similar simplification by allowing assignment of\r\nmultiple values to corresponding variables in a single assignment statement.\r\nFor example,\r\n\r\n  a, b :\u003d b, a;\r\n\r\nwhich also requires a hidden copying of values."
  }
});
formatter.step({
  "line": 204,
  "name": "an invalid run unit is",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 205,
    "value": "class Swapper3 {\r\n\r\nint a, b;\r\n\r\nvoid swap() {\r\n  int startingA\u0027 \u003d \u0027a;\r\n  a\u0027 \u003d \u0027b;\r\n  b\u0027 \u003d startingA\u0027;\r\n}\r\nmeans(startingA\u0027 \u003d \u0027a \u0026\u0026 a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d startingA\u0027);\r\n   // startingA\u0027 value is out of scope here, outside the method\u0027s block,\r\n   // because its variable startingA is declared inside the block\r\n\r\n} // end class"
  }
});
formatter.step({
  "line": 222,
  "name": "an error message contains",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 223,
    "value": "Variable startingA has not been defined in this scope"
  }
});
formatter.match({
  "location": "StepDefinitions.a_valid_T_Language_run_unit_is(String)"
});
formatter.result({
  "duration": 3072100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.notes(String)"
});
formatter.result({
  "duration": 42200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.an_invalid_run_unit_is(String)"
});
formatter.result({
  "duration": 2653500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.an_error_message_contains(String)"
});
formatter.result({
  "duration": 91700,
  "status": "passed"
});
formatter.scenario({
  "line": 228,
  "name": "Intermediate value names use middle decoration",
  "description": "\r\n  Because the value of a variable may change more than once in a method, a way\r\n  of naming the intermediate values is needed. This is accomplished by\r\n  appending an apostrophe and additional name continuation characters. For\r\n  instance lovely\u002714, lovely\u0027temp2, or lovely\u0027Mary could all be\r\n  middle-decorated intermediate values of the variable named \"lovely\".\r\n\r\n  We end up with the pleasant conceit that a variable\u0027s pre-execution value is\r\n  pre-decorated, any mid-execution values are mid-decorated, and its post-\r\n  execution value is post-decorated.",
  "id": "value-names-are-decorated-variable-names-(t-language-0.1);intermediate-value-names-use-middle-decoration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 240,
  "name": "A valid T Language run unit is",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 241,
    "value": "class AllTrue {\r\n\r\nboolean a, b, c;\r\n\r\nboolean allTrue;\r\n\r\nvoid checkAll() {\r\n  allTrue\u0027reset \u003d true;\r\n  allTrue\u0027thruA \u003d allTrue\u0027reset \u0026\u0026 \u0027a;\r\n  allTrue\u0027thruB \u003d allTrue\u0027thruA \u0026\u0026 \u0027b;\r\n  allTrue\u0027      \u003d allTrue\u0027thruB \u0026\u0026 \u0027c;\r\n}\r\nmeans(allTrue\u0027 \u003d (\u0027a \u0026\u0026 \u0027b \u0026\u0026 \u0027c)); // equality is stickier than \u0026\u0026\r\n\r\n} // end class"
  }
});
formatter.match({
  "location": "StepDefinitions.a_valid_T_Language_run_unit_is(String)"
});
formatter.result({
  "duration": 952650900,
  "status": "passed"
});
formatter.scenario({
  "line": 260,
  "name": "Using value names allows proving logical statements",
  "description": "\r\n  A means-statement uses value names in logic statements. We require that it\r\n  only restate things that have already been said in the commands and logic\r\n  statements above it in the code. We have a loose definition of \"restate\"\r\n  here, in that anything that can be proven from the meanings of the code\r\n  above the means-statement may be included in the means-statement. From a\r\n  code execution point of view, by the time that any execution path through\r\n  the code reaches the means-statement, it must be true.\r\n\r\n  Logic statements are not just for helping programmers understand a program;\r\n  it is a compiler error to have a means-statement that cannot be proven. The\r\n  compiler must only prove valid statements, but cannot be guaranteed to prove\r\n  all valid statements, so the programmer will sometimes need to help the\r\n  prover by providing intermediate steps.\r\n\r\n  In other features, we will have a lot more to say about making automated\r\n  proofs useful to programmers and about the requirements that a prover must\r\n  meet when it is part of a compiler.",
  "id": "value-names-are-decorated-variable-names-(t-language-0.1);using-value-names-allows-proving-logical-statements",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 280,
  "name": "an invalid run unit is",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 281,
    "value": "class Swapper4 {\r\n\r\nint a, b;\r\n\r\nvoid swap() {\r\n  int startingA\u0027 \u003d \u0027a;\r\n  a\u0027 \u003d \u0027b;\r\n  b\u0027 \u003d startingA\u0027;\r\n}\r\nmeans(a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d \u0027b); // error here\r\n\r\n} // end class"
  }
});
formatter.step({
  "line": 296,
  "name": "an error message contains",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 297,
    "value": "The code does not support the proof of the statement: b\u0027 \u003d \u0027b"
  }
});
formatter.step({
  "line": 302,
  "name": "Notes",
  "keyword": "* ",
  "doc_string": {
    "content_type": "\"",
    "line": 303,
    "value": "Previous Research\r\n\r\nThe use of Tony Hoare\u0027s logic (1969) to prove the correctness of programs\r\noften uses proof outlines, that is, assertions embedded in code -- not for\r\nchecking for errors during program execution, but to aid the construction of a\r\nproof of correctness and help programmers see the correctness as they read the\r\ncode. These assertions were used soon after Hoare\u0027s logic paper, for\r\ninstance (Hoare, 1971). The name \"proof outline\" seems to have been first used\r\nin publication by Owicki and Gries (1976). Fred Schneider (1995) gives a\r\nthorough explanation of them and summarizes their history. The means-statement\r\nof the T language was originally developed as a way to include proof outlining\r\nas an integral part of a language. This would balance the lopsided view that\r\nprocedural programming languages encourage and force the programmer to focus\r\njust as much on the state as on the procedural operations. Because the Java\r\nassert statement has a purely operational meaning, \"means\" was chosen, to call\r\nattention to the semantics of operations as changes to the state.  But it\r\nquickly became clear that inserting a means-statement between every pair of\r\noperations repeated almost everything from the previous means statement, and\r\nin addition was repeating most of the syntax of the operations. Combined with\r\na reading of Hener (1984), this led to thinking of each operation as having a\r\npredicate-calculus meaning, which led to backfitting the variable decorators\r\nfrom the means-statements into the operations in order to expose the fact that\r\noperations are also expressions in the predicate-calculus, which only worked\r\nwhen a naming convention was found that completely distinguished value names\r\nfrom variable names. This led to code syntax that encouraged a statement-by-\r\nstatement focus on the changing state of the executing program.\r\nNon-operational logic statements are now only needed in the T language when\r\nthe facts that are stated by the operations need to be clarified, summarized,\r\nor reformulated into new concepts.\r\n\r\nAuxiliary variables, also called history variables or fixed variables, were\r\nintroduced by Clint (???) and have become a standard part of proving program\r\ncorrectness (Hoare, 1969; Gries, 19??; Dijkstra, ????). The value of an\r\nauxiliary variable never changes; therefore, in our terminology, auxiliary\r\nvariables are value names that are lexically independent of the variables that\r\nhold, or once held, the value. Alternatively, the value names of the T\r\nlanguage could be considered to be a convention for naming and using auxiliary\r\nvariables. However, auxiliary variables have only been used in comments and\r\nproofs of correctness, whereas value names are included as part of the T\r\nlanguage syntax and, as well as aiding in proofs, are used to draw the\r\nattention of the programmer to changes in state as part of the normal coding\r\nprocess.\r\n\r\nDecorated variables have been used to identify a particular value of the\r\nvariable by almost every computer scientist who has struggled with program\r\nsemantics (and long before that by mathematicians and physicists describing\r\nchange). A post-decorated variable name has been used to denote the initial\r\nvalue of a variable by some and the final value by others, leaving the other\r\nvalue to be denoted by the variable name without any decoration. The Eifel\r\nlanguage () also includes a syntax for the ???original??? value of a variable\r\nin post-conditions of methods. This double use of one name for both a variable\r\nand one of its values causes no problems when describing a single state of the\r\nprogram. In order to describe states across multiple points in the code, the T\r\nlanguage clearly distinguishes between variables and values and brings the\r\ndecoration tactic into the syntax of the language.\r\n\r\nWard Maurer found a way to use the simple conjunction of statements in his\r\nmodification index method (1977). He noted the advantage of post-decorating\r\nstorage location names and variable names with integers to distinguish all the\r\nvalues of a variable while proving program correctness. The consistency of the\r\nrelationship between a decorated name and a value throughout a program allowed\r\nMaurer to simplify construction of verification conditions for proofs using\r\nordinary conjunction. Of course, program proof and program semantics are\r\nintertwined concepts, but Mauer never seems to have reflected on the\r\nimplications of his work for program semantics. As in Maurer\u0027s work, the T\r\nlanguage takes advantage of the use of values in interacting with a prover.\r\n\r\nSingle assignment languages require a new variable name at each assignment\r\n(Tesler and Enea, 1968), essentially making them into value names, whereas the\r\nT language requires a new value name to be associated with a variable at each\r\nassignment. Some single assignment languages allow statements to be entered in\r\nany order, since unique variable names can be used to sort statements into a\r\ncorrect execution order, but the T language requires the programmer to specify\r\nthe execution order and merely checks that no names are used out of order.\r\n\r\nThe static single assignment (SSA) intermediate representation for languages\r\nassigns a modified variable name to every unique value of a variable. It is\r\nused in compiler writing (Rosen, et. al, 1988) to simplify static analysis for\r\ncode optimization. One might think of the T language as refocusing SSA onto\r\nprogram understanding in order to simplify the job of programmers instead of\r\ncompilers.\r\n\r\nEric Hehner showed that programs are predicates (Hehner, 19??; Hoare and\r\nHanna, 19??; Hoare, 19??). The T language explores this idea with a\r\nfirst-order predicate logic that uses only value names, abandoning the\r\ncomplications of programming variables that can change value in the middle of\r\nsolving a problem.\r\n\r\nHoare logic and the \"programs are predicates\" approach lay a firm mathematical\r\nfoundation for understanding programming variables. The tradition in this type\r\nof mathematical analysis is to use the same name for a variable and for one of\r\nits values, which works well for stating predicates that only refer to a\r\nsingle state, but complicates the formalization of assigment and of sequential\r\ncomposition of separately analyzed program sections. The added complication\r\nfor sequential composition is that renaming is required in order to syncronize\r\nthe variable/value names after one operation with the beginning of the next,\r\nwhich requires additional proof steps. The use of value names in the T language\r\nmakes this additional mental baggage disappear. However, as we explore more\r\nfeatures of the T language, we will require the programmer to name the initial\r\nand final values for variables that change within a method or programming\r\nconstruct, and there is a sense in which this use of the T language\u0027s value\r\nnames are simply a way of solving the equations for sequential composition\r\nthat are given by Hehner and Hoare, which is as we expect since its all just\r\nmathematics. We merely wish to pose the empirical hypothesis that the T\r\nlanguage notation will help the programmer see what is true about the state as\r\nthe program executes, that is, see what the program means.\r\n\r\n\r\nConclusion\r\n\r\nThe T language provides a syntax for naming values as well as variables in a\r\nJava-like programming language. Because the syntax of an operation is\r\nexpressed with named constant values, we do not need to invent a special logic\r\nto help us keep track of the changing values held by variables. This allows\r\nthe programmer to see that every operation is itself a logic statement which\r\nrelates the state before the operation to the state after. And because\r\noperations are predicates, we are able to see that the meaning of a sequence\r\nof operations is simply their conjunction.\r\n\r\nIt can be hoped that drawing the attention of the programmer to changes in\r\nstate with value names and integrating a prover into the compiler will lead to\r\na practical fulfillment of the idea of constructing programs in parallel with\r\ntheir proofs of correctness (?Dijktra?, ????). Indeed, it looks like they are\r\nthey are one and the same task, and the T language can be thought of as a\r\nsyntax that shows that programs are proofs (????).\r\n\r\nAh, well, we do realize that we have demonstrated this grand idea only for\r\nthose programs that are a simple sequence of assignments -- we will cover the\r\ncomplications introduced by control structures, method calls, object\r\norientation, aliasing, concurrency, the use of interfaces for program\r\nspecification, and proofs of correctness in separate feature descriptions.\r\n\r\n\r\nReferences\r\n\r\n\r\n  David Chisnall. 2018. C Is Not a Low-level Language. Queue Vol. 16, No. 2, April, 2018. DOI: https://doi.org/10.1145/3212477.3212479\r\n\r\n  Gries, ...\r\n\r\n  Hehner, A Practical Theory of Programming, 1984.\r\n\r\n  C. A. R. Hoare, \"An Axiomatic Basis for Computer Programming\",\r\n  Communications of the ACM, Vol. 12, No. 10, Oct., 1969.\r\n\r\n  C. A. R. Hoare and F. K. Hanna, \"Programs are Predicates\", Philosophical\r\n  Transactions of the Royal Society of London. Series A, Mathematical and\r\n  Physical Sciences, Vol. 312, No. 1522, Mathematical Logic and Programming\r\n  Languages (Oct. 1, 1984), pp. 475-489\r\n\r\n  C. A. R. Hoare, \"Proof of a program: Find\", Communications of the ACM, Vol.\r\n  14, No. 1, Jan., 1971.\r\n\r\n  W. D. Maurer. 1977. \"The modification index method of generating\r\n  verification conditions\". In Proceedings of the 15th annual Southeast\r\n  regional conference (ACM-SE 15). ACM, New York, NY, USA, 426-440.\r\n  DOI\u003dhttp://dx.doi.org/10.1145/1795396.1795456\r\n\r\n  Susan Owicki and David Gries, \"An axiomatic proof technique for parallel\r\n  programs I\", Acta Informatica, Vol. 6, pp. 319-340, 1976.\r\n\r\n  Barry Rosen; Mark N. Wegman; F. Kenneth Zadeck, 1988. \"Global value numbers\r\n  and redundant computations\". In Proceedings of the 15th ACM SIGPLAN-SIGACT\r\n  symposium on Principles of programming languages. ACM, New York, NY, USA,\r\n  12-27. DOI\u003dhttp://dx.doi.org/10.1145/73560.73562\r\n\r\n  Fred B. Schneider, \"Notes on Proof Outline Logic\", Technical Report, Cornell\r\n  University, Ithaca, NY, 1995.\r\n\r\n  L. G. Tesler and H. J. Enea. 1968. A language design for concurrent\r\n  processes. In Proceedings of the April 30--May 2, 1968, spring joint\r\n  computer conference (AFIPS \u002768 (Spring)). ACM, New York, NY, USA, 403-408.\r\n  DOI\u003dhttp://dx.doi.org/10.1145/1468075.1468134"
  }
});
formatter.step({
  "line": 479,
  "name": "Note",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 480,
    "value": "Java is a trademark of Oracle, Inc.\r\n\r\nThe T Language depends upon the considerable orderly thinking that underlies\r\nthe complexity of the Java language. Many thanks to the creators of Java, to\r\nthe Sun and Oracle corporations for developing and supporting it, and to the\r\nJava Community for their work through the years.\r\n\r\nCopyright (c) 2017, George S. Cowan"
  }
});
formatter.match({
  "location": "StepDefinitions.an_invalid_run_unit_is(String)"
});
formatter.result({
  "duration": 432726800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.an_error_message_contains(String)"
});
formatter.result({
  "duration": 54100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.notes(String)"
});
formatter.result({
  "duration": 37100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.notes(String)"
});
formatter.result({
  "duration": 42300,
  "status": "passed"
});
});