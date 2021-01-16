$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/tlang/Features/Spec%20Features/a_valueNames.feature");
formatter.feature({
  "name": "Value names are decorated variable names (TrueJ 0.1)",
  "description": "  TrueJ directs the programmer\u0027s attention to the changing state of the program\u0027s data as each\n  statement is executed. In procedural and object-oriented languages like Java*, variables hold the\n  state, but the particular state held by those variables is never made explicit. So an important\n  difference between TrueJ and Java is that we add a way for each state contained in the variables\n  to be explicitly represented. And because we want programmers to easily make the transition to\n  focusing more on the state and less on the variables that hold the state, we need to resist most\n  of the temptations to make other changes.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Values have names",
  "description": "    TrueJ represents state by adding a syntax for naming the values\n    that are held by variables. We add a distinct decoration to a variable\u0027s\n    name for each of the values that it stores, keeping the variable\u0027s name as\n    part of the value name to allow the programmer to control details of the\n    procedural programming. Within the scope of each executable, The name of the\n    initial value that a variable holds is the variable name pre-decorated with\n    an apostrophe, and the name of the ending value is the variable name\n    post-decorated with an apostrophe. For example, the initial value of the\n    variable z is named \u0027z and the final value is named z\u0027. We can read \u0027z as\n    \"initial-z\" and z\u0027 as \"z-final\".\n\n    Once we make this transition from variable names to value names, we can show facts about program\n    state as statements about values. We introduce a new statement, the means-statement to summarize\n    the meaning of the preceding operations in terms of facts that have been established in the\n    state.",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "value": "class Swapper {\n\nint a, b;\n\nvoid swap() {\n  int startingA\u0027 \u003d \u0027a;\n  a\u0027 \u003d \u0027b;\n  b\u0027 \u003d startingA\u0027;\n  means startingA\u0027 \u003d \u0027a \u0026\u0026 a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d startingA\u0027;\n}\nmeans(a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d \u0027a);\n\n} // end class"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.a_valid_run_unit_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Notes",
  "keyword": "* ",
  "doc_string": {
    "value": "Three comments about TrueJ\u0027s syntax and semantics will help the reader understand the example\nprogram above. The first is that in TrueJ, the syntax for the assignment statement is almost\nexactly the same as the notation for its semantics. For instance, when making claims about the\nprogram state after the assignment:\n    a\u0027 \u003d \u0027b;\nwe use the state expression:\n    a\u0027 \u003d \u0027b\nand because they are essentially identical the programmer can choose to read off the meaning of\nthe statement instead of its operational action. That is, instead of reading \"copy the value in\nvariable b to a\", or \"the variable a gets the value in b\", or \"the variable a now has the same\nvalue as the variable b\", or \"the variable a can now be substituted for the expression b in\nprior statements\", the programmer can now abandon mechanical metaphors, transient truths about\nvariables, and substitution of variables and expressions, and instead think about unchanging\ntruths about values, reading off the meaning of the statement \"a\u0027 \u003d \u0027b;\" as \"a-final equals\ninitial-b\".\n\nThe second comment is that TrueJ gives up Java\u0027s ability to include\na side-effect-like internal assignment inside an arbitrary expression in\nexchange for unifying the syntax of three uses of equality:\n\n  - equality resulting from an assigment statement\n  - equality tests in conditional expressions\n  - equality in claims about program state\n\nThey all use the single equal sign \u0027\u003d\u0027. It will have to be emphasized to new programmers that\nthe new value name must be on the left-hand side of an assigment, and no new value names may\noccur on the right-hand side. It is an empirical question as to which will weigh the most: the\nconfusion caused by this operational vs. semantic asymmetry/symmetry, or the simplified\nunderstanding from using the equality symbol to point to the meaning of the assignment. The\nuncomfortable itch that some of us feel in overloading the same symbol for these distinct uses\nis one clue, but the satisfaction in easily reading off the meaning of the assignment is\nanother. I hesitate to begin exploring the other solution, which is to allow the assignment\nstatement to be symmetrical, because it moves further down the slippery slope that takes us away\nfrom Java.\n\nThe third, and more dramatic, comment is that working with a consistent name for each value\nsimplifies our understanding of the overall program\u0027s meaning. As you might have noted, in the\ncode inside the swap() method, the means-statement is wasted verbage:\n\n    int startingA\u0027 \u003d \u0027a;\n    a\u0027 \u003d \u0027b;\n    b\u0027 \u003d startingA\u0027;\n\n    means(startingA\u0027 \u003d \u0027a \u0026\u0026 a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d startingA\u0027);\n\nIt is simply the meaning of each of the statements, combined with an \"and\". Once we use values\ninstead of variables, the semantics of a program\u0027s top-level sequential statements is\nconjunction.\n\nThis brings us closer to our goal of helping programmers think in terms of state as well as\noperations because the conjunction of statements over values provides a simple semantics for\nunderstanding the cumulative change in state created by those operations. People understand\nconjuction, so we will attempt to dispense with a discussion of inference rules for combining\nstatements in all but the most advanced discussions of TrueJ. Of course, we appreciate the\nclarity that we gain from formal mathematical descriptions of the use of variables or machine\nstorage locations during program execution; we only claim that this simpler mathematics is more\nhelpful for writing programs.\n\nFunctional and logic programming languages also focus on values, but at the expense of\nincreasing the conceptual distance from the procedural instructions of the programmers mental\nmodel of the underlying machine that runs the programs (but see Chisnall, 2018).\n\nA careful look at the above program also raises the issue of the scope of\nthe value names. Within the means-statements we use the initial value \u0027a,\neven though that value is no longer present in any variable -- it has been\noverwritten by the statement\n   a\u0027 \u003d \u0027b;\nSo it seems that the scope of a value has to continue after the value ceases to exist, at least\nfor logic statements. Should we allow the overwritten value to be used in the logic statements,\nbut not the operational statements? We seem to have two uncomfortable options. The first is that\nwe make sure that programmers understand that only values that exist can be mentioned in\noperational statements, but that values that no longer exist can be mentioned in logic. The\nalternative, and the option that TrueJ uses, is to allow the values to be reused in both code\nand descriptions of state. We make this explicit in the following scenario."
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.notes(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The scope of a value name ends with the scope of its variable",
  "description": "    Normally in a procedural language, the value held by a variable disappears\n    when you overwrite it with a new value, but not in TrueJ. If you need a value\n    whose variable is still in scope, the compiler will make sure the value\n    still exists. Obviously, the implementation must keep a copy of any\n    overwritten values that are needed for later statements.\n\n    The link between variables and their values becomes more abstract, but we\n    hope to wave that issue away for beginning programmers by saying,\n    \"Obviously, the implementation must keep a copy of any overwritten values\n    that are needed for later statements\".\n\n    The reason that we go to the trouble to allow the use of overwritten values in TrueJ is that our\n    state-based focus will often require us to make claims about how the current state relates to an\n    earlier one, and we don\u0027t want to confuse beginning programmers with a different rule about\n    using value names in operational statements vs. using them in claims about state. TrueJ makes\n    the scope of overwritten values the same in both logic statements and operational statements by\n    introducing the rule that the scope of a value begins with its definition and ends with the end\n    of the scope of its variable.\n\n    This feature embarasses me a little because, above, I was fussy over the conceptual distance of\n    functional and logic languages from the procedural nature of the computer, and here we are,\n    hiding a variable to hold the copy of the overwritten value and hiding the copy operation\n    itself. My only defense is that it seems the best compromise if our primary goal is to integrate\n    state and process.\n\n    The ability to refer back to values that have been overwritten will only simplify program code a\n    little, but the readability of programs is so important that this bit of simplification is still\n    a worthwhile contribution of TrueJ. At any rate, for some programs, reusing old values does\n    wonders. For instance, the semantics of the swap() method becomes so obvious from the code that\n    writing it out as a separate means-statement adds useless verbage and detracts from its\n    readability; instead, we just let the compiler infer the meaning of the method.",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "value": "class Swapper2 {\n\nint a, b;\n\nvoid swap() {\n  a\u0027 \u003d \u0027b;\n  b\u0027 \u003d \u0027a;   // OK to use value \u0027a because the variable a is still in scope\n}\n\n} // end class"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.a_valid_run_unit_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Note",
  "keyword": "* ",
  "doc_string": {
    "value": "Some other languages gain a similar simplification by allowing assignment of\nmultiple values to corresponding variables in a single assignment statement.\nFor example,\n\n  a, b :\u003d b, a;\n\nwhich also requires a hidden copying of values."
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.notes(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an invalid run unit is",
  "keyword": "When ",
  "doc_string": {
    "value": "class Swapper3 {\n\nint a, b;\n\nvoid swap() {\n  int startingA\u0027 \u003d \u0027a;\n  a\u0027 \u003d \u0027b;\n  b\u0027 \u003d startingA\u0027;\n}\nmeans(startingA\u0027 \u003d \u0027a \u0026\u0026 a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d startingA\u0027);\n   // startingA\u0027 value is out of scope here, outside the method\u0027s block,\n   // because its variable startingA is declared inside the block\n\n} // end class"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.an_invalid_run_unit_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an error message contains",
  "keyword": "Then ",
  "doc_string": {
    "value": "Variable startingA has not been defined in this scope"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.an_error_message_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Intermediate value names use middle decoration",
  "description": "    Because the value of a variable may change more than once in a method, a way of naming the\n    intermediate values is needed. This is accomplished by appending an apostrophe and additional\n    name continuation characters. For instance lovely\u002714, lovely\u0027temp2, or lovely\u0027Mary could all be\n    middle-decorated intermediate values of the variable named \"lovely\".\n\n    We end up with the pleasant conceit that a variable\u0027s pre-execution value is\n    pre-decorated, any mid-execution values are mid-decorated, and its post-\n    execution value is post-decorated.",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "value": "class AllTrue {\n\nboolean a, b, c;\n\nboolean allTrue;\n\nvoid checkAll() {\n  allTrue\u0027reset \u003d true;\n  allTrue\u0027thruA \u003d allTrue\u0027reset \u0026\u0026 \u0027a; // \u0026\u0026 is stickier than assignment\n  allTrue\u0027thruB \u003d allTrue\u0027thruA \u0026\u0026 \u0027b;\n  allTrue\u0027      \u003d allTrue\u0027thruB \u0026\u0026 \u0027c;\n}\nmeans(allTrue\u0027 \u003d (\u0027a \u0026\u0026 \u0027b \u0026\u0026 \u0027c));    // equality is stickier than \u0026\u0026\n\n} // end class"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.a_valid_run_unit_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Using value names allows proving logical statements",
  "description": "    A means-statement uses value names in fist-order predicate logic statements. It consists of only\n    those things that can be deduced from operational statements and logic statements that occured\n    earlier in the code. From a code execution point of view, by the time that any execution path\n    through the code reaches it, the means-statement must be true.\n\n    Logic statements are not just for helping programmers understand a program;\n    it is a compiler error to have a means-statement that cannot be proven. The\n    compiler must only prove valid statements, but cannot be guaranteed to prove\n    all valid statements, so the programmer will sometimes need to help the\n    prover by providing intermediate steps.\n\n    In other features, we will have a lot more to say about making automated proofs useful to\n    programmers and about the constraints that are placed on a prover when it is part of a compiler.",
  "keyword": "Scenario"
});
formatter.step({
  "name": "an invalid run unit is",
  "keyword": "When ",
  "doc_string": {
    "value": "class Swapper4 {\n\nint a, b;\n\nvoid swap() {\n  int startingA\u0027 \u003d \u0027a;\n  a\u0027 \u003d \u0027b;\n  b\u0027 \u003d startingA\u0027;\n}\nmeans(a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d \u0027b); // error here\n\n} // end class"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.an_invalid_run_unit_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an error message contains",
  "keyword": "Then ",
  "doc_string": {
    "value": "The code does not support the proof of the statement: b\u0027 \u003d \u0027b"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.an_error_message_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Notes",
  "keyword": "* ",
  "doc_string": {
    "value": "Previous Research\n\nThe use of Tony Hoare\u0027s logic (1969) to prove the correctness of programs often uses proof\noutlines, that is, assertions embedded in code -- not to check for errors during program\nexecution, like the Java assert-statement, but to aid the construction of a proof of correctness\nand help programmers see the correctness as they read the code. These assertions were used soon\nafter Hoare\u0027s logic paper, for instance (Hoare, 1971). The name \"proof outline\" seems to have\nbeen first used in publication by Owicki and Gries (1976). Fred Schneider (1995) gives a thorough\nexplanation of them and summarizes their history. The means-statement of TrueJ was originally\ndeveloped as a way to include proof outlines as an integral part of a language. This would\nbalance the lopsided view of procedural programming languages as just a sequence of operations\nand encourage the programmer to focus just as much on the state as on the procedural operations.\nBecause the Java assert-statement has a purely operational meaning, \"means\" was chosen to name\nthe assertions, to call attention to the semantics of operations as changes to the state. But it\nquickly became clear that inserting a means-statement between every pair of operations just\nrepeated the meaning of the operations, and in addition trivially repeated most of the syntax of\nthe operations. Combined with a reading of Hener (1984), this led to thinking of each operation\nas having a predicate-calculus meaning, which led to backfitting the variable decorators from the\nmeans-statements into the operations in order to expose the fact that operations are also\nexpressions in the predicate-calculus, which only worked when a naming convention was found that\ncompletely distinguished value names from variable names. This led to code syntax that encouraged\na statement-by-statement focus on the changing state of the executing program. Non-operational\nlogic statements are only needed in TrueJ when the facts that are stated by the operations need to\nbe clarified, summarized, or restated as new concepts.\n\nAuxiliary variables, also called history variables or fixed variables, were introduced by Clint\n(???) and have become a standard part of proving program correctness (Hoare, 1969; Gries, 19??;\nDijkstra, ????). The value of an auxiliary variable never changes; therefore, in our terminology,\nauxiliary variables are value names that are lexically independent of the variables that hold, or\nonce held, the value. Alternatively, the value names of TrueJ could be considered to be a\nconvention for naming and using auxiliary variables. However, previous work has only used\nauxiliary variables in comments and proofs of correctness, whereas value names are included as\npart of the TrueJ syntax and, as well as aiding in proofs, are used to draw the attention of the\nprogrammer to changes in state as part of the normal coding process.\n\nDecorated variables have been used to identify a particular value of the variable by almost every\ncomputer scientist who has struggled with program semantics (and long before that by\nmathematicians and physicists describing change). A post-decorated variable name has been used to\ndenote the initial value of a variable by some and the final value by others, leaving the other\nvalue to be denoted by the variable name without any decoration. The Eifel language () also\nincludes a syntax for the initial value of a variable in post-conditions of methods. This\noverloaded use of one name for both a variable and one of its values causes no problems when\ndescribing a single state of the program. In order to describe states across multiple points in\nthe code, TrueJ clearly distinguishes between variables and values and brings the decoration\ntactic into the syntax of the language.\n\nWard Maurer found a way to use the simple conjunction of statements in his\nmodification index method (1977). He noted the advantage of post-decorating\nstorage location names and variable names with integers to distinguish all the\nvalues of a variable while proving program correctness. The consistency of the\nrelationship between a decorated name and a value throughout a program allowed\nMaurer to simplify construction of verification conditions for proofs using\nordinary conjunction. Of course, program proof and program semantics are\nintertwined concepts, but Mauer never seems to have reflected on the\nimplications of his work for program semantics. As in Maurer\u0027s work, TrueJ\ntakes advantage of the use of values in interacting with a prover.\n\nSingle assignment languages identify the concepts of variable and value by requiring a new\nvariable name at each assignment (Tesler and Enea, 1968), whereas TrueJ requires a new value name\nto be associated with a variable at each assignment. Some single assignment languages allow\nstatements to be entered in any order, since unique variable names can be used to sort statements\ninto a correct execution order, but TrueJ requires the programmer to specify the execution order\nand merely checks that no names are used out of order.\n\nThe static single assignment (SSA) intermediate representation for languages assigns a modified\nvariable name to every unique value of a variable. It is used in compiler writing (Rosen, et. al,\n1988) to simplify static analysis for code optimization. One might think of TrueJ as repurposing\nSSA for program understanding in order to simplify the job of programmers instead of compilers.\n\nEric Hehner showed that programs are predicates (Hehner, 19??; Hoare and Hanna, 19??; Hoare,\n19??). TrueJ explores this idea with a first-order predicate logic that uses only value names,\nabandoning the complications of programming variables that can change value in the middle of\nsolving a problem.\n\nHoare logic and the \"programs are predicates\" approach provides a firm mathematical foundation for\nunderstanding programming variables. The tradition in this type of mathematical analysis is to use\nthe same name for a variable and for one of its values, which works well for stating predicates\nthat only refer to a single state, but complicates the formalization of assignment and of\nsequential composition of separately analyzed program sections. The added complication for\nsequential composition is that renaming is required in order to synchronize the variable/value\nnames after one operation with the beginning of the next, which requires additional proof steps.\nThe use of value names in TrueJ makes this additional mental baggage disappear. However, as we\nexplore more features of TrueJ, we will require the programmer to name the initial and final\nvalues for variables that change within a method or programming construct, and there is a sense in\nwhich this use of TrueJ\u0027s value names are simply a way of solving the equations for sequential\ncomposition that are given by Hehner and Hoare, which is as we expect since its all just\nmathematics. We merely wish to pose the empirical hypothesis that TrueJ\u0027s notation will help the\nprogrammer see what is true about the state as the program executes, that is, see what the program\nmeans.\n\n\nConclusion\n\nTrueJ provides a syntax for naming values as well as variables in a\nJava-like programming language. Because the syntax of an operation is\nexpressed with named constant values, we do not need to invent a special logic\nto help us keep track of the changing values held by variables. This allows\nthe programmer to see that every operation is itself a logic statement which\nrelates the state before the operation to the state after. And because\noperations are predicates, we are able to see that the meaning of a sequence\nof operations is simply their conjunction.\n\nIt can be hoped that drawing the attention of the programmer to changes in state with value names\nand integrating a prover into the compiler will lead to a practical fulfillment of the idea of\nconstructing programs in parallel with their proofs of correctness (?Dijktra?, ????). Indeed, it\nlooks like they are they are one and the same task, and TrueJ can be thought of as a syntax that\nshows that programs are proofs (????).\n\nAh, well, we do realize that we have demonstrated this grand idea only for those programs that are\na simple sequence of assignments -- we will cover the complications introduced by control\nstructures, method calls, object orientation, aliasing, concurrency, proofs of correctness, and\nthe use of interfaces for program specification in separate feature descriptions.\n\n\nReferences\n\n\n  David Chisnall. 2018. C Is Not a Low-level Language. Queue Vol. 16, No. 2, April, 2018. DOI: https://doi.org/10.1145/3212477.3212479\n\n  Gries, ...\n\n  Hehner, A Practical Theory of Programming, 1984.\n\n  C. A. R. Hoare, \"An Axiomatic Basis for Computer Programming\",\n  Communications of the ACM, Vol. 12, No. 10, Oct., 1969.\n\n  C. A. R. Hoare and F. K. Hanna, \"Programs are Predicates\", Philosophical\n  Transactions of the Royal Society of London. Series A, Mathematical and\n  Physical Sciences, Vol. 312, No. 1522, Mathematical Logic and Programming\n  Languages (Oct. 1, 1984), pp. 475-489\n\n  C. A. R. Hoare, \"Proof of a program: Find\", Communications of the ACM, Vol.\n  14, No. 1, Jan., 1971.\n\n  W. D. Maurer. 1977. \"The modification index method of generating\n  verification conditions\". In Proceedings of the 15th annual Southeast\n  regional conference (ACM-SE 15). ACM, New York, NY, USA, 426-440.\n  DOI\u003dhttp://dx.doi.org/10.1145/1795396.1795456\n\n  Susan Owicki and David Gries, \"An axiomatic proof technique for parallel\n  programs I\", Acta Informatica, Vol. 6, pp. 319-340, 1976.\n\n  Barry Rosen; Mark N. Wegman; F. Kenneth Zadeck, 1988. \"Global value numbers\n  and redundant computations\". In Proceedings of the 15th ACM SIGPLAN-SIGACT\n  symposium on Principles of programming languages. ACM, New York, NY, USA,\n  12-27. DOI\u003dhttp://dx.doi.org/10.1145/73560.73562\n\n  Fred B. Schneider, \"Notes on Proof Outline Logic\", Technical Report, Cornell\n  University, Ithaca, NY, 1995.\n\n  L. G. Tesler and H. J. Enea. 1968. A language design for concurrent\n  processes. In Proceedings of the April 30--May 2, 1968, spring joint\n  computer conference (AFIPS \u002768 (Spring)). ACM, New York, NY, USA, 403-408.\n  DOI\u003dhttp://dx.doi.org/10.1145/1468075.1468134"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.notes(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Note",
  "keyword": "* ",
  "doc_string": {
    "value": "Java is a trademark of Oracle, Inc.\n\nTrueJ depends upon the considerable orderly thinking that underlies\nthe complexity of the Java language. Many thanks to the creators of Java, to\nthe Sun and Oracle corporations for developing and supporting it, and to the\nJava Community for their work through the years.\n\nCopyright (c) 2017, George S. Cowan"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.notes(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/tlang/Features/Spec%20Features/b_IfStatement.feature");
formatter.feature({
  "name": "The if statement",
  "description": "  The if-statement control structure provides conditional operations. We postpone discussing the\n  switch/case statement until we have introduced the basics of the TrueJ language.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "The if-statement allows alternative definitions for values",
  "description": "    A value name has only one value for the whole range of its scope, but that value may be selected\n    from different options, depending upon the runtime conditions of the state.",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "value": "class Rates {\n\ndouble rate;\n\ndouble standardRate\u0027 \u003d 0.05;\ndouble discountRate\u0027 \u003d 0.15;\n\nboolean hasDiscount;\n\nvoid setRate() {\n  if (\u0027hasDiscount) rate\u0027 \u003d discountRate\u0027;\n               else rate\u0027 \u003d standardRate\u0027;\n\n  // a natural logic for if-then-else statements\n  means ( (   \u0027hasDiscount \u003d\u003d\u003e rate\u0027 \u003d discountRate\u0027 )\n        \u0026 ( ! \u0027hasDiscount \u003d\u003d\u003e rate\u0027 \u003d standardRate\u0027 )\n        );\n}\n// an equivalent logic\nmeans ( (   \u0027hasDiscount \u0026 rate\u0027 \u003d discountRate\u0027)\n      | ( ! \u0027hasDiscount \u0026 rate\u0027 \u003d standardRate\u0027)\n      );\n\n} // end class"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.a_valid_run_unit_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "A valid value name has a definition in each branch of a conditional",
  "description": "    For a value name to be available to an operation or logic statement later in its scope, it must\n    be defined along all paths to that statement. For an if-statement, this means that it must be\n    defined in both branches. And we are able to issue helpful error messages because they point to\n    the branch that omits a value name, or misspells it, or attempts to define a new name that was\n    not in prior branches.\n\n    Although we require the value names to be the same from branch to branch, we do not require them\n    to be defined in the same order.\n\n    Sometimes a value name will be needed in only one branch. When this happens, one approach is for\n    the programmer to use a new local variable instead. Otherwise the programmer will be required to\n    define that value name in another branch solely because it was needed in this branch. However,\n    in the other branch, if the programmer writes this otherwise unneeded definition as a trivial\n    assignment of the latest value to the needed value name, the compiler will at least recognize\n    that it doesn\u0027t need to generate any executablecode to establish the truth of the assignment\u0027s\n    semantics, and that semantics will still be available for use in status expressions following\n    the conditional statement.\n\n    SHOULD WE DO THIS INSTEAD?\n      Ignore an ill-defined value name until an attempt is made to reference it. The advantage of\n      this method is that value names in if-statements do not require trivial self-assignments in\n      other branches. The disadvantage is that the programmer may attempt to use a value name later\n      and be surprised that the preceding and previously error-free code does not allow it to be\n      used. But perhaps well written error messages would solve this problem.\n\n      (As an Implementation note, checking whether a value is defined on all branches would still be\n      required, and issuing a good error message to help the programmer locate a problem would\n      require saving the same information that is now reported.)",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "value": "class Swapper_2 {\n\nint a;\nint b;\n\nvoid validSwap() {\n  if (\u0027a \u003d \u0027b) {\n    a\u0027 \u003d \u0027a; // the compiler generates a null operation for the assignments\n    b\u0027 \u003d \u0027b;\n  } else {\n    a\u0027 \u003d \u0027b;\n    b\u0027 \u003d \u0027a;\n  }\n}\nmeans(a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d \u0027a);\n\n} // end class"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.a_valid_run_unit_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "value": "class Swapper_3 {\n\nint a;\nint b;\n\nvoid validSwap() {\n  if (\u0027a \u003d \u0027b) {\n    a\u0027temp1 \u003d \u0027b;\n    a\u0027temp2 \u003d a\u0027temp1;\n    b\u0027temp1 \u003d \u0027a;\n    b\u0027temp2 \u003d b\u0027temp1;\n  } else {\n    a\u0027temp2 \u003d \u0027b; // note the different order of assignment here to the variables a and b\n    a\u0027temp1 \u003d a\u0027temp2;\n    b\u0027temp2 \u003d \u0027a;\n    b\u0027temp1 \u003d b\u0027temp2;\n  }\n  a\u0027 \u003d a\u0027temp2;\n  b\u0027 \u003d b\u0027temp2;\n}\nmeans(a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d \u0027a);\n\n} // end class"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.a_valid_run_unit_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an invalid run unit is",
  "keyword": "When ",
  "doc_string": {
    "value": "class Rates_1X {\n\ndouble rate;\ndouble reportRate;\n\ndouble standardRate\u0027 \u003d 0.05;\ndouble discountRate\u0027 \u003d 0.15;\n\nboolean hasDiscount;\n\nvoid setRate() {\n  rate\u0027standard \u003d standardRate\u0027;\n  if (\u0027hasDiscount)\n    rate\u0027 \u003d discountRate\u0027;\n  else\n    ; // ERROR: attempting to let rate variable default to rate\u0027standard previous value\n\n  reportRate\u0027 \u003d rate\u0027; /* This is also an error because rate\u0027 is not defined in all paths\n                        * but it is not discovered here */\n}\nmeans ( (   \u0027hasDiscount \u0026 reportRate\u0027 \u003d discountRate\u0027)\n      | ( ! \u0027hasDiscount \u0026 reportRate\u0027 \u003d standardRate\u0027)\n          /* this last disjunct would also be an error because there is no proof\n            * that reportRate\u0027 \u003d standardRate\u0027 when \u0027hasDiscount \u003d false,\n            * but it is not found because the else-error stops the proof attempt */\n      );\n\n} // end class"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.an_invalid_run_unit_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an error message contains",
  "keyword": "Then ",
  "doc_string": {
    "value": "rate\u0027 was not defined in the else-clause"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.an_error_message_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "A more complex example - ThreeSort",
  "description": "    This version of sorting three items minimizes copying in each case.\n\n    The means-statements are used to keep track of the state determined so far. Clearly we have more\n    work to do to make this readable; conjunctive comparison relations like a\u0027 \u003c b\u0027 \u003c c\u0027 would help\n    a lot, and because we have not yet presented a theory of comparisons at all, we were not able to\n    write means-statements with obvious simplifications, such as \u0027c \u003c \u0027b instead of !(\u0027b \u003c\u003d \u0027c).\n\n    The implicit local variable that TrueJ creates is often helpful, but in one case we need to use\n    a different ordering of the code than our preferred one to avoid creating two implicit local\n    variables.",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "value": "class Triplet {\n\nint a;\nint b;\nint c;\n\nvoid threeSort() {\n  if (\u0027a \u003c\u003d \u0027b) {\n    if (\u0027b \u003c\u003d \u0027c) { // already in order\n      a\u0027 \u003d \u0027a;                           // no-ops generated for self assignment\n      b\u0027 \u003d \u0027b;\n      c\u0027 \u003d \u0027c;\n    } else {\n      if (\u0027a \u003c\u003d \u0027c) {\n        means \u0027a \u003c\u003d \u0027c \u0026 !(\u0027b \u003c\u003d \u0027c);    // \u0027a \u003c\u003d \u0027c \u003c \u0027b\n        a\u0027 \u003d \u0027a;\n        b\u0027 \u003d \u0027c;\n        c\u0027 \u003d \u0027b;\n      } else {\n        means !(\u0027a \u003c\u003d \u0027c) \u0026 \u0027a \u003c\u003d \u0027b;    // \u0027c \u003c \u0027a \u003c\u003d \u0027b);\n        a\u0027 \u003d \u0027c;                         // \u0027a is saved in an implicit variable here\n        c\u0027 \u003d \u0027b;                         // a,c,b assignment here to avoid implicit \u0027b variable\n        b\u0027 \u003d \u0027a;\n      }\n    }\n  } else { // \u0027b \u003c \u0027a\n    if (\u0027a \u003c\u003d \u0027c) { // \u0027b \u003c \u0027a \u003c\u003d \u0027c\n      means ( !(\u0027a \u003c\u003d \u0027b ) \u0026\u0026 \u0027a \u003c\u003d \u0027c); // \u0027b \u003c \u0027a \u003c\u003d \u0027c);\n      a\u0027 \u003d \u0027b;\n      b\u0027 \u003d \u0027a;\n      c\u0027 \u003d \u0027c;\n    } else {\n      if (\u0027b \u003c\u003d \u0027c) {\n        means (\u0027b \u003c\u003d \u0027c \u0026\u0026 !(\u0027a \u003c\u003d \u0027c)); // \u0027b \u003c\u003d \u0027c \u003c \u0027a\n        a\u0027 \u003d \u0027b;\n        b\u0027 \u003d \u0027c;\n        c\u0027 \u003d \u0027a;\n      } else {\n        means ( !(\u0027b \u003c\u003d \u0027c) \u0026\u0026 !(\u0027a \u003c\u003d \u0027b)); // \u0027c \u003c \u0027b \u003c \u0027a);\n        a\u0027 \u003d \u0027c;\n        b\u0027 \u003d \u0027b;\n        c\u0027 \u003d \u0027a;\n      }\n    }\n  }\n}\n// means (a\u0027 \u003c\u003d b\u0027 \u0026\u0026 b\u0027 \u003c\u003d c\u0027);  // requires theory of comparisons\n\n} // end class"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.a_valid_run_unit_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "An if-then-statement may not define value names",
  "description": "    The then-only version of the if-statement becomes much less useful because value names must be\n    defined under all cases. However, a single branch of an if statement may still be used as long\n    as no value names are defined. Perhaps writing to a log file would be a good example, but even\n    that would not apply if you wanted the accuracy of the log file to be part of the specification.",
  "keyword": "Scenario"
});
formatter.step({
  "name": "an invalid run unit is",
  "keyword": "When ",
  "doc_string": {
    "value": "class Swapper_1 {\n\nint a;\nint b;\n\n/** We (invalidly) attempt to avoid swapping the two values when they are equal. */\nvoid invalidSwap() {\n  if (\u0027a !\u003d \u0027b) {\n    a\u0027 \u003d \u0027b;\n    b\u0027 \u003d \u0027a;\n  }\n}\nmeans(a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d \u0027a);\n\n} // end class"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.an_invalid_run_unit_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an error message contains",
  "keyword": "Then ",
  "doc_string": {
    "value": "a\u0027 was not defined in the else-clause"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.an_error_message_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an error message contains",
  "keyword": "And ",
  "doc_string": {
    "value": "b\u0027 was not defined in the else-clause"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.an_error_message_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/tlang/Features/Spec%20Features/c_block.feature");
formatter.feature({
  "name": "Blocks delimit the scope of variable names",
  "description": "  A block is compound statement that organizes a list of statements together into a single unit and\n  provides a syntactic scope for variables and their values. We code a block by inclosing a sequence\n  of statements between curly braces. All of an object\u0027s procedural code is contained in blocks,\n  either method bodies, constructor bodies, or initializer blocks.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "The meaning of a block is the conjunction of the meanings of its sequence of statements",
  "description": "  If there is no top-level means-statement, then the meaning of a block is the conjunction of the\n  meaning of all of its top level statements. We illustrate this with a method block that contains\n  no means statements. We can see that the meaning of the method block is the conjunction of the\n  meaning of its statements by comparing it with the means statement for the entire method\n  definition.",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "value": "class BlockMeaning1 {\n\nint a, b;\nint startingA;\n\nvoid swap() {\n  startingA\u0027 \u003d \u0027a;\n  a\u0027 \u003d \u0027b;\n  b\u0027 \u003d startingA\u0027;\n}\nmeans(startingA\u0027 \u003d \u0027a \u0026 a\u0027 \u003d \u0027b \u0026 b\u0027 \u003d startingA\u0027);\n\n} // end class"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.a_valid_run_unit_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The means-statement replaces the meaning of the blocks\u0027s preceding statements",
  "description": "  The means-statement is used to summarize, refactor, or reformulate the meaning of all the\n  preceding statements of the block, replacing them with the predicate of the means-statement. The compiler will only\n  accept means statements that are logically entailed by the meaning of the statements that it\n  summarizes. Thus, a programmer reading the block of code can use the means statement to understand\n  the intent of the preceding statements. Also, in order to understand the overall meaning of a\n  block, the programmer can start reading at the bottommost means statement, so it is good practice\n  to have a final means statement at the end of every nontrivial block.\n\n  Note that the current value of a local variable may be forgotten after a means-statement, but its\n  type is still available to allow definition of a new value for it.",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "value": "class BlockMeaning2 {\n\nint a, b;\n\nvoid swap() {\n  int startingA\u0027 \u003d \u0027a;\n  a\u0027 \u003d \u0027b;\n  b\u0027 \u003d startingA\u0027;\n  means(a\u0027 \u003d \u0027b \u0026 b\u0027 \u003d \u0027a);\n}\n\n} // end class"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.a_valid_run_unit_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "value": "class BlockMeaning2a {\n\nint a, b;\n\nvoid swap() {\n  int startingA\u0027 \u003d \u0027a;\n  int \u0027startingB \u003d \u0027b;\n  a\u0027 \u003d \u0027startingB;\n  means (startingA\u0027 \u003d \u0027a \u0026 a\u0027 \u003d \u0027b); // forget \u0027startingB \u003d \u0027b \u0026 a\u0027 \u003d \u0027startingB\n  b\u0027 \u003d startingA\u0027;\n  means (a\u0027 \u003d \u0027b \u0026 b\u0027 \u003d \u0027a);\n}\n\n} // end class"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.a_valid_run_unit_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "value": "class BlockMeaning2a {\n\nint a, b;\n\nvoid swap() {\n  int startingA\u0027 \u003d \u0027a;\n  int \u0027startingB \u003d \u0027b + \u0027a;\n  means (startingA\u0027 \u003d \u0027a); // \u003c\u003d\u003d\u003d\u003d start reading here\n  startingB\u0027 \u003d \u0027b;         // we can create a new value for variable startingB\n  a\u0027 \u003d startingB\u0027;\n  b\u0027 \u003d startingA\u0027;\n}\nmeans (a\u0027 \u003d \u0027b \u0026 b\u0027 \u003d \u0027a);\n\n} // end class"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.a_valid_run_unit_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an invalid run unit is",
  "keyword": "When ",
  "doc_string": {
    "value": "class BlockMeaning2b {\n\nint a, b, c;\n\nvoid rotateLeft() {\n  int startingA\u0027 \u003d \u0027a;\n  a\u0027 \u003d \u0027b;\n  means a\u0027 \u003d \u0027b;   // forget startingA\u0027 \u003d \u0027a\n  b\u0027 \u003d \u0027c;\n  c\u0027 \u003d startingA\u0027; // error because the value of startingA\u0027 is forgotten\n  means a\u0027 \u003d \u0027b \u0026 b\u0027 \u003d \u0027c \u0026 c\u0027 \u003d \u0027a;\n}\n\n} // end class"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.an_invalid_run_unit_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an error message contains",
  "keyword": "Then ",
  "doc_string": {
    "value": "The code does not support the proof of the statement: c\u0027 \u003d \u0027a"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.an_error_message_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Blocks may be nested",
  "description": "  A block may be nested in another block\u0027s sequential code or used as part of a complex control\n  statement, such as being one branch of a conditional statement. When a block is nested within\n  another block, the inside block is treated as a single compound statement of the enclosing block\n  with its own meaning that can be given in a single statement. When a block is part of a complex\n  control statement, the meaning of the block plays one part of the more complex meaning of the\n  control statement. We will treat the conditional and iterative statements that may contain blocks\n  in a separate feature descriptions.",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "value": "class BlockMeaning3 {\n\nint a, b;\n\nvoid swap() {\n  int startingA\u0027 \u003d \u0027a;\n  { int startingB\u0027 \u003d \u0027b;\n    a\u0027 \u003d startingB\u0027;\n    means (a\u0027 \u003d \u0027b);\n  }\n  b\u0027 \u003d startingA\u0027;\n}\nmeans (a\u0027 \u003d \u0027b \u0026 b\u0027 \u003d \u0027a);\n\n} // end class"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.a_valid_run_unit_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "A variable\u0027s scope encloses the scopes of all its values",
  "description": "  The relationship of local variables and blocks is consistent with Java. To review: the scope of a\n  variable, which is the set of code statements where values of the variable may be defined or used,\n  extends from the variable\u0027s declaration to the end of the block where it is declared, and includes\n  any nested blocks. A block\u0027s variables must have names that do not shadow those that were already\n  declared in an enclosing scope. This includes method parameter names; however, field names may be\n  shadowed with a new variable name, requiring access to the field to be dot-prefixed with either\n  \u0027super\u0027 or \u0027this\u0027. A separate, non-overlapping, block may use the same name for one of its\n  variables, but having the same name does not indicate any relationship between the variables --\n  they are entirely separate variables.\n\n  Our example shows an attempt to use a value name that is out of scope.",
  "keyword": "Scenario"
});
formatter.step({
  "name": "an invalid run unit is",
  "keyword": "When ",
  "doc_string": {
    "value": "class BlockMeaning4 {\n\nint a, b;\n\nvoid swap() {\n  int startingA\u0027 \u003d \u0027a;\n  { // Here we will save and set b\n    int startingB\u0027 \u003d \u0027b;\n    b\u0027 \u003d startingA\u0027;\n    means(b\u0027 \u003d \u0027a);\n  }\n  a\u0027 \u003d startingB\u0027; // Oops, the variable startingB is out of scope\n}\nmeans(a\u0027 \u003d \u0027b \u0026 b\u0027 \u003d \u0027a);\n\n} // end class"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.an_invalid_run_unit_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an error message contains",
  "keyword": "Then ",
  "doc_string": {
    "value": "Variable startingB has not been defined in this scope"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.an_error_message_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/tlang/Features/Spec%20Features/d_goto.feature");
formatter.feature({
  "name": "Consideration of the goto statement",
  "description": "The TrueJ language does not have a goto statement; however, it is instructive to consider how it would look if a goto statement had the support of status statements. Would it be easier to use goto statement in a way that programmers could understand? Would it be more difficult to write programs that mislead the programmer\u0027s understanding?\n\nIncluding the goto statement might also allow experimentation that leads to useful new control statements, for instance a search statement. We therefore allow the use the goto statement, checking the syntax and verification conditions, but producing an error instead of generating executable code.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "A labeled statement must be immediately followed by a means statement",
  "description": "A label is used to syntactically mark all statements that might be the target of one or more goto statements. The code following the label accomplishes some task, with the requirements perhaps stated in a means-statement that follows that code. We would like to be able to understand the code after that label and ensuring that it accomplishes its requirements without understanding all the code that might have led to the label. To simplify the job of understanding the code, we partition our analysis into separate chunks -- we follow the label with a means statement that summarizes everything the following code needs in order to accomplish its task, forming a chunk of code that can be analyzed independently. Then the code before each goto statement that targets that label can be analyzed independently to ensure that it has a meaning that supports the means-statement after the label. The remaining job in our analysis is to make sure that the code will eventually exit, which can be easily automated when all the goto statements jump forward. Jumps that loop back will be discussed later.",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "value": ""
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.a_valid_run_unit_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/tlang/Features/Spec%20Features/e_status.feature");
formatter.feature({
  "name": "Status Statements for Executable code",
  "description": "  Several TrueJ statements can summarize the state required or created by the code as it executes.\n  These are the given-statement, the means-statement, the lemma, and the conjecture. The use of\n  status statements to constrain or summarize the state of an object between method executions is\n  covered in another feature.\n\n  TODO: Add tests for the lemma.\n  TODO: Add tests for the given statement.\n  TODO: Add tests for the conjecture.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "A block forgets operations from before a means statement",
  "description": "    To ensure that the programmer can rely on the means statement to understand previous code, the\n    compiler forgets all of the block\u0027s operations from above the means. The compiler translates all\n    its operational code for execution, of course, but after a means statement it only allows status\n    statements to use the facts extablished by the means statement.\n\n    There are more issues with means statements that we will discuss along with the other TrueJ\n    status statements. But here is an example that shows an error caused by an attempt to refer back\n    to a forgotten fact.",
  "keyword": "Scenario"
});
formatter.step({
  "name": "an invalid run unit is",
  "keyword": "When ",
  "doc_string": {
    "value": "class BlockMeaning3 {\n\nint a, b;\n\nvoid swap() {\n  int startingA\u0027 \u003d \u0027a;\n  a\u0027 \u003d \u0027b;\n  means (a\u0027 \u003d \u0027b);          // Oops, we are now forgetting that startingA\u0027 \u003d \u0027a\n  b\u0027 \u003d startingA\u0027;          // We generate code, but we don\u0027t know what that code means\n  means(a\u0027 \u003d \u0027b \u0026 b\u0027 \u003d \u0027a); // So we can\u0027t see that    b\u0027\u003dstartingA\u0027  \u003d\u003d\u003e  b\u0027\u003d\u0027a\n}\n\n} // end class"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.an_invalid_run_unit_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an error message contains",
  "keyword": "Then ",
  "doc_string": {
    "value": "The code does not support the proof of the statement: b\u0027 \u003d \u0027a"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.an_error_message_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The compiler remembers type information for a variable after a means statement",
  "description": "  TODO: Create code to show success and falure because it remembers the type of a variable.\n\n  Because the scope of a variable reaches to the end of the block, new values can be assigned to it\n  after a means statement. To ensure that those values have the correct type, the type of the\n  variable is remembered after a means statement.",
  "keyword": "Scenario"
});
formatter.scenario({
  "name": "The compiler remembers facts from surrounding blocks after a means statement",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a valid run unit is",
  "keyword": "* ",
  "doc_string": {
    "value": "class BlockMeaning5 {\n\nint a, b;\n\nvoid swap() {\n  int startingA\u0027 \u003d \u0027a;\n  { int startingB\u0027 \u003d \u0027b;\n    a\u0027 \u003d startingB\u0027;\n    means (a\u0027 \u003d \u0027b);\n    b\u0027 \u003d startingA\u0027;\n    means (a\u0027 \u003d \u0027b \u0026 b\u0027 \u003d \u0027a);\n  }\n}\n\n} // end class"
  }
});
formatter.match({
  "location": "tlang.StepDefinitions.a_valid_run_unit_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Object fields that are modified must have a final value for security",
  "description": "  TODO: Code the examples.\n\n  Because the means-statement is expected to summarize the code above it, a security review should\n  be possible by looking only at means-statements where they exist. To prevent malicious or\n  accidental ommision of modifications of an object, TrueJ requires that a means-statement must\n  define the value of any fields that are modified in the code above it. We allow lenient security\n  for a field with little security implications, such as a usage counter or log, by marking it with\n  the lenient-modifier.",
  "keyword": "Scenario"
});
});