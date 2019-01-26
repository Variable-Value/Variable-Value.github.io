$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/cowan/Documents/GitHub/cowang-test/github.io/TrueJ/Cucumber/Features/aa_valueNames.feature");
formatter.feature({
  "line": 1,
  "name": "Value names are decorated variable names (T Language 0.1)",
  "description": "\nThe T Language attempts to direct the programmer\u0027s attention to the state of\nthe program information as each step of a T program is executed. In procedural\nand object oriented languages like Java*, variables hold the state, but the\nparticular state held by those variables is never made explicit. So\nalthough it is a strong principle of the T Language that it diverges from Java\nonly when this attention to state requires it, we immediately face a major\nchange: we must add a way for each state contained in the variables to be\nexplicitly represented. And we need to make as few other changes as possible\nbecause we want programmers to easily make the transition to focusing more on\nthe state and less on the variables that hold the state.",
  "id": "value-names-are-decorated-variable-names-(t-language-0.1)",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 15,
  "name": "Values have names",
  "description": "\n  The T language represents state by adding a syntax for naming the values\n  that are held by variables. We add a distinct decoration to a variable\u0027s\n  name for each of the values that it stores, keeping the variable name as\n  part of the value name to allow the programmer to control details of the\n  procedural programming. Within each executable scope, The name of the\n  initial value that a variable holds is the variable name pre-decorated with\n  an apostrophe, and the name of the ending value is the variable name\n  post-decorated with an apostrophe. For example, the initial value of the\n  variable z is named \u0027z and the final value is named z\u0027. We can read \u0027z as\n  \"initial-z\" and z\u0027 as \"z-final\".\n\n  Once we make this transition from variable names to value names, we can show\n  facts about program state as statements about values. We introduce the\n  means-statement to summarize the meaning of the preceding operations in\n  terms of facts that have been established in the state.",
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
    "value": "class Swapper {\n\nint a, b;\n\nvoid swap() {\n  int startingA\u0027 \u003d \u0027a;\n  a\u0027 \u003d \u0027b;\n  b\u0027 \u003d startingA\u0027;\n  means(startingA\u0027 \u003d \u0027a \u0026\u0026 a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d startingA\u0027);\n}\nmeans(a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d \u0027a);\n\n} // end class"
  }
});
formatter.step({
  "line": 50,
  "name": "Notes",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 51,
    "value": "Three comments about the T Language syntax and semantics will help the\nreader understand the example program above. The first is that in the T\nLanguage, the syntax for the assignment command is almost exactly the same\nas the notation for its semantics. For instance, when making claims about\nthe program state after the assignment command:\n    a\u0027 \u003d \u0027b;\nwe use the state expression:\n    a\u0027 \u003d \u0027b\nand the programmer can choose to read off the meaning of the command instead\nof its operational action. That is, instead of reading \"copy the value in\nvariable b to a\", or \"the variable a gets the value in b\", or \"the variable\na now has the same value as the variable b\", or \"the variable a can now be\nsubstituted for the expression b in prior statements\", the programmer can\nnow abandon mechanical metaphors, transient truths about variables, and\nsubstitution of variables and expressions, and instead think about\nunchanging truths about values, reading off the meaning of the command as\n\"a-final equals initial-b\".\n\nThe second comment is that the T Language gives up Java\u0027s ability to include\na side-effect-like internal assignment inside an arbitrary expression in\nexchange for unifying the syntax of three uses of equality:\n\n  - equality resulting from an assigment statement\n  - equality tests in conditional expressions\n  - equality in claims about program state\n\nThey all use the single equal sign \u0027\u003d\u0027. It will have to be emphasized to new\nprogrammers that the new value name must be on the left-hand side of an\nassigment, and no new value names may occur on the right-hand side. It is an\nempirical question as to which will count for the most: the confusion caused\nby the asymmetry of the assignment command or the simplified understanding\nfrom using the equality symbol to point to the meaning of the assignment;\nthe uncomfortable itch that some of us feel in overloading the same symbol\nfor two semantically distinct uses is one clue, but the satisfaction in\neasily reading off the meaning of the assignment is another. I hesitate to\nbegin exploring the other solution, which is to allow the assigment\nstatement to be symmetrical, because it moves down a slippery slope that\ntakes us further and further from Java: we could also easily solve a linear\nequation in the compiler as long as only one new value name is introduced;\nin fact we could easily solve common non-linear equations; in fact, we could\nsolve multiple simultaneous equations for the values of multiple new value\nnames; but this interesting new language is very distant from procedural\nprogramming in Java. So, at least for the time being, new vaue names are on\nthe left-hand side of an assignment.\n\nThe third, and more dramatic, comment is that working with a consistent name\nfor each value simplifies our understanding of the program\u0027s meaning. As\nyou might have noted, in the code inside the swap() method, the means-\nstatement is wasted verbage:\n\n    int startingA\u0027 \u003d \u0027a;\n    a\u0027 \u003d \u0027b;\n    b\u0027 \u003d startingA\u0027;\n\n    means(startingA\u0027 \u003d \u0027a \u0026\u0026 a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d startingA\u0027);\n\nIt is simply the meaning of each of the statements, combined with an \"and\".\nOnce we use values instead of variables, program semantics is conjunction.\n\nThis brings us closer to our goal of helping programmers think in terms of\nstate as well as operations because the conjunction of statements over\nvalues provides a simple semantics for understanding the cumulative change in state created by\nthose operations. People understand conjuction, so we will attempt to dispense with a discussion\nof inference rules for combining statements in all but the most advanced discussions of the T\nlanguage. Of course, we appreciate the clarity that we have been given by formal mathematical\ndescriptions of how that conjunctive understanding is complicated when we focus on programming\nvariables or machine storage locations during program execution; we only claim that this simpler\nmathematics is more helpful for writing programs.\n\nFunctional and logic programming languages also focus on values, but at the\nexpense of increasing the conceptual distance from the procedural\ninstructions of the programmers mental model of the underlying machine that runs the programs\n(but see Chisnall, 2018).\n\nA careful look at the above program also raises the issue of the scope of\nthe value names. Within the means-statements we use the initial value \u0027a,\neven though that value is no longer present in any variable -- it has been\noverwritten by the statement\n   a\u0027 \u003d \u0027b;\nSo it seems that the scope of a value has to continue after the value ceases\nto exist, at least for logic statements. Should we allow the overwritten\nvalue to be used in the logic statements, but not the command statements? We\nseem to have two uncomfortable options. The first is that we make sure that\nprogrammers understand that only values that exist can be mentioned in\ncommands, but that values that no longer exist can be mentioned in logic.\nThe alternative, and the option that the T language uses, is to allow the\nvalues to be reused in both code and descriptions of state. We make this\nexplicit in the following scenario."
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
  "description": "\n  Normally in a procedural language, the value held by a variable disappears\n  when you overwrite it with a new value, but not in T. If you need a value\n  whose variable is still in scope, the compiler will make sure the value\n  still exists. Obviously, the implementation must keep a copy of any\n  overwritten values that are needed for later commands.\n\n  The link between variables and their values becomes more abstract, but we\n  hope to wave that issue away for beginning programmers by saying,\n  \"Obviously, the implementation must keep a copy of any overwritten values\n  that are needed for later commands\".\n\n  The reason that we go to the trouble to allow the use of overwritten values\n  in the T Language is that our state-based focus will often require us to\n  make claims about how the current state relates to an earlier one, and we\n  don\u0027t want to confuse beginning programmers with a different rule about\n  using value names in commands vs. using them in claims about state. The T\n  language makes the scope of overwritten values the same in both logic\n  statements and command statements by introducing the rule that the name of a\n  value has a scope that begins with its definition and ends with the end of\n  the scope of its variable\u0027s name.\n\n  This feature embarasses me a little because, above, I was fussy over the conceptual\n  distance of functional and logic languages from the procedural nature of the\n  computer, and here we are, hiding a variable to hold the copy of the\n  overwritten value and hiding the copy operation itself. My only defense is\n  that it seems the best compromise if our primary goal is to give equal attention to state and process.\n\n  The ability to refer back to values that have been overwritten will only simplify program code a\n  little, but the readability of programs is so important that this bit of simplification is still\n  a worthwhile contribution of the T language. At any rate, for some programs, reusing old values\n  does wonders. For instance, the semantics of the swap() method becomes so obvious from the code\n  that writing it out as a separate means-statement adds useless verbage and detracts from its\n  readability; instead, we just let the compiler infer the meaning of the method.",
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
    "value": "class Swapper2 {\n\nint a, b;\n\nvoid swap() {\n  a\u0027 \u003d \u0027b;\n  b\u0027 \u003d \u0027a;   // OK to use value \u0027a because the variable a is still in scope\n}\n\n} // end class"
  }
});
formatter.step({
  "line": 193,
  "name": "Note",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 194,
    "value": "Some other languages gain a similar simplification by allowing assignment of\nmultiple values to corresponding variables in a single assignment statement.\nFor example,\n\n  a, b :\u003d b, a;\n\nwhich also requires a hidden copying of values."
  }
});
formatter.step({
  "line": 204,
  "name": "an invalid run unit is",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 205,
    "value": "class Swapper3 {\n\nint a, b;\n\nvoid swap() {\n  int startingA\u0027 \u003d \u0027a;\n  a\u0027 \u003d \u0027b;\n  b\u0027 \u003d startingA\u0027;\n}\nmeans(startingA\u0027 \u003d \u0027a \u0026\u0026 a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d startingA\u0027);\n   // startingA\u0027 value is out of scope here, outside the method\u0027s block,\n   // because its variable startingA is declared inside the block\n\n} // end class"
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
  "description": "\n  Because the value of a variable may change more than once in a method, a way\n  of naming the intermediate values is needed. This is accomplished by\n  appending an apostrophe and additional name continuation characters. For\n  instance lovely\u002714, lovely\u0027temp2, or lovely\u0027Mary could all be\n  middle-decorated intermediate values of the variable named \"lovely\".\n\n  We end up with the pleasant conceit that a variable\u0027s pre-execution value is\n  pre-decorated, any mid-execution values are mid-decorated, and its post-\n  execution value is post-decorated.",
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
    "value": "class AllTrue {\n\nboolean a, b, c;\n\nboolean allTrue;\n\nvoid checkAll() {\n  allTrue\u0027reset \u003d true;\n  allTrue\u0027thruA \u003d allTrue\u0027reset \u0026\u0026 \u0027a;\n  allTrue\u0027thruB \u003d allTrue\u0027thruA \u0026\u0026 \u0027b;\n  allTrue\u0027      \u003d allTrue\u0027thruB \u0026\u0026 \u0027c;\n}\nmeans(allTrue\u0027 \u003d (\u0027a \u0026\u0026 \u0027b \u0026\u0026 \u0027c)); // equality is stickier than \u0026\u0026\n\n} // end class"
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
  "description": "\n  A means-statement uses value names in logic statements. We require that it\n  only restate things that have already been said in the commands and logic\n  statements above it in the code. We have a loose definition of \"restate\"\n  here, in that anything that can be proven from the meanings of the code\n  above the means-statement may be included in the means-statement. From a\n  code execution point of view, by the time that any execution path through\n  the code reaches the means-statement, it must be true.\n\n  Logic statements are not just for helping programmers understand a program;\n  it is a compiler error to have a means-statement that cannot be proven. The\n  compiler must only prove valid statements, but cannot be guaranteed to prove\n  all valid statements, so the programmer will sometimes need to help the\n  prover by providing intermediate steps.\n\n  In other features, we will have a lot more to say about making automated\n  proofs useful to programmers and about the requirements that a prover must\n  meet when it is part of a compiler.",
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
    "value": "class Swapper4 {\n\nint a, b;\n\nvoid swap() {\n  int startingA\u0027 \u003d \u0027a;\n  a\u0027 \u003d \u0027b;\n  b\u0027 \u003d startingA\u0027;\n}\nmeans(a\u0027 \u003d \u0027b \u0026\u0026 b\u0027 \u003d \u0027b); // error here\n\n} // end class"
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
    "value": "Previous Research\n\nThe use of Tony Hoare\u0027s logic (1969) to prove the correctness of programs\noften uses proof outlines, that is, assertions embedded in code -- not for\nchecking for errors during program execution, but to aid the construction of a\nproof of correctness and help programmers see the correctness as they read the\ncode. These assertions were used soon after Hoare\u0027s logic paper, for\ninstance (Hoare, 1971). The name \"proof outline\" seems to have been first used\nin publication by Owicki and Gries (1976). Fred Schneider (1995) gives a\nthorough explanation of them and summarizes their history. The means-statement\nof the T language was originally developed as a way to include proof outlining\nas an integral part of a language. This would balance the lopsided view that\nprocedural programming languages encourage and force the programmer to focus\njust as much on the state as on the procedural operations. Because the Java\nassert statement has a purely operational meaning, \"means\" was chosen, to call\nattention to the semantics of operations as changes to the state.  But it\nquickly became clear that inserting a means-statement between every pair of\noperations repeated almost everything from the previous means statement, and\nin addition was repeating most of the syntax of the operations. Combined with\na reading of Hener (1984), this led to thinking of each operation as having a\npredicate-calculus meaning, which led to backfitting the variable decorators\nfrom the means-statements into the operations in order to expose the fact that\noperations are also expressions in the predicate-calculus, which only worked\nwhen a naming convention was found that completely distinguished value names\nfrom variable names. This led to code syntax that encouraged a statement-by-\nstatement focus on the changing state of the executing program.\nNon-operational logic statements are now only needed in the T language when\nthe facts that are stated by the operations need to be clarified, summarized,\nor reformulated into new concepts.\n\nAuxiliary variables, also called history variables or fixed variables, were\nintroduced by Clint (???) and have become a standard part of proving program\ncorrectness (Hoare, 1969; Gries, 19??; Dijkstra, ????). The value of an\nauxiliary variable never changes; therefore, in our terminology, auxiliary\nvariables are value names that are lexically independent of the variables that\nhold, or once held, the value. Alternatively, the value names of the T\nlanguage could be considered to be a convention for naming and using auxiliary\nvariables. However, auxiliary variables have only been used in comments and\nproofs of correctness, whereas value names are included as part of the T\nlanguage syntax and, as well as aiding in proofs, are used to draw the\nattention of the programmer to changes in state as part of the normal coding\nprocess.\n\nDecorated variables have been used to identify a particular value of the\nvariable by almost every computer scientist who has struggled with program\nsemantics (and long before that by mathematicians and physicists describing\nchange). A post-decorated variable name has been used to denote the initial\nvalue of a variable by some and the final value by others, leaving the other\nvalue to be denoted by the variable name without any decoration. The Eifel\nlanguage () also includes a syntax for the ???original??? value of a variable\nin post-conditions of methods. This double use of one name for both a variable\nand one of its values causes no problems when describing a single state of the\nprogram. In order to describe states across multiple points in the code, the T\nlanguage clearly distinguishes between variables and values and brings the\ndecoration tactic into the syntax of the language.\n\nWard Maurer found a way to use the simple conjunction of statements in his\nmodification index method (1977). He noted the advantage of post-decorating\nstorage location names and variable names with integers to distinguish all the\nvalues of a variable while proving program correctness. The consistency of the\nrelationship between a decorated name and a value throughout a program allowed\nMaurer to simplify construction of verification conditions for proofs using\nordinary conjunction. Of course, program proof and program semantics are\nintertwined concepts, but Mauer never seems to have reflected on the\nimplications of his work for program semantics. As in Maurer\u0027s work, the T\nlanguage takes advantage of the use of values in interacting with a prover.\n\nSingle assignment languages require a new variable name at each assignment\n(Tesler and Enea, 1968), essentially making them into value names, whereas the\nT language requires a new value name to be associated with a variable at each\nassignment. Some single assignment languages allow statements to be entered in\nany order, since unique variable names can be used to sort statements into a\ncorrect execution order, but the T language requires the programmer to specify\nthe execution order and merely checks that no names are used out of order.\n\nThe static single assignment (SSA) intermediate representation for languages\nassigns a modified variable name to every unique value of a variable. It is\nused in compiler writing (Rosen, et. al, 1988) to simplify static analysis for\ncode optimization. One might think of the T language as refocusing SSA onto\nprogram understanding in order to simplify the job of programmers instead of\ncompilers.\n\nEric Hehner showed that programs are predicates (Hehner, 19??; Hoare and\nHanna, 19??; Hoare, 19??). The T language explores this idea with a\nfirst-order predicate logic that uses only value names, abandoning the\ncomplications of programming variables that can change value in the middle of\nsolving a problem.\n\nHoare logic and the \"programs are predicates\" approach lay a firm mathematical\nfoundation for understanding programming variables. The tradition in this type\nof mathematical analysis is to use the same name for a variable and for one of\nits values, which works well for stating predicates that only refer to a\nsingle state, but complicates the formalization of assigment and of sequential\ncomposition of separately analyzed program sections. The added complication\nfor sequential composition is that renaming is required in order to syncronize\nthe variable/value names after one operation with the beginning of the next,\nwhich requires additional proof steps. The use of value names in the T language\nmakes this additional mental baggage disappear. However, as we explore more\nfeatures of the T language, we will require the programmer to name the initial\nand final values for variables that change within a method or programming\nconstruct, and there is a sense in which this use of the T language\u0027s value\nnames are simply a way of solving the equations for sequential composition\nthat are given by Hehner and Hoare, which is as we expect since its all just\nmathematics. We merely wish to pose the empirical hypothesis that the T\nlanguage notation will help the programmer see what is true about the state as\nthe program executes, that is, see what the program means.\n\n\nConclusion\n\nThe T language provides a syntax for naming values as well as variables in a\nJava-like programming language. Because the syntax of an operation is\nexpressed with named constant values, we do not need to invent a special logic\nto help us keep track of the changing values held by variables. This allows\nthe programmer to see that every operation is itself a logic statement which\nrelates the state before the operation to the state after. And because\noperations are predicates, we are able to see that the meaning of a sequence\nof operations is simply their conjunction.\n\nIt can be hoped that drawing the attention of the programmer to changes in\nstate with value names and integrating a prover into the compiler will lead to\na practical fulfillment of the idea of constructing programs in parallel with\ntheir proofs of correctness (?Dijktra?, ????). Indeed, it looks like they are\nthey are one and the same task, and the T language can be thought of as a\nsyntax that shows that programs are proofs (????).\n\nAh, well, we do realize that we have demonstrated this grand idea only for\nthose programs that are a simple sequence of assignments -- we will cover the\ncomplications introduced by control structures, method calls, object\norientation, aliasing, concurrency, the use of interfaces for program\nspecification, and proofs of correctness in separate feature descriptions.\n\n\nReferences\n\n\n  David Chisnall. 2018. C Is Not a Low-level Language. Queue Vol. 16, No. 2, April, 2018. DOI: https://doi.org/10.1145/3212477.3212479\n\n  Gries, ...\n\n  Hehner, A Practical Theory of Programming, 1984.\n\n  C. A. R. Hoare, \"An Axiomatic Basis for Computer Programming\",\n  Communications of the ACM, Vol. 12, No. 10, Oct., 1969.\n\n  C. A. R. Hoare and F. K. Hanna, \"Programs are Predicates\", Philosophical\n  Transactions of the Royal Society of London. Series A, Mathematical and\n  Physical Sciences, Vol. 312, No. 1522, Mathematical Logic and Programming\n  Languages (Oct. 1, 1984), pp. 475-489\n\n  C. A. R. Hoare, \"Proof of a program: Find\", Communications of the ACM, Vol.\n  14, No. 1, Jan., 1971.\n\n  W. D. Maurer. 1977. \"The modification index method of generating\n  verification conditions\". In Proceedings of the 15th annual Southeast\n  regional conference (ACM-SE 15). ACM, New York, NY, USA, 426-440.\n  DOI\u003dhttp://dx.doi.org/10.1145/1795396.1795456\n\n  Susan Owicki and David Gries, \"An axiomatic proof technique for parallel\n  programs I\", Acta Informatica, Vol. 6, pp. 319-340, 1976.\n\n  Barry Rosen; Mark N. Wegman; F. Kenneth Zadeck, 1988. \"Global value numbers\n  and redundant computations\". In Proceedings of the 15th ACM SIGPLAN-SIGACT\n  symposium on Principles of programming languages. ACM, New York, NY, USA,\n  12-27. DOI\u003dhttp://dx.doi.org/10.1145/73560.73562\n\n  Fred B. Schneider, \"Notes on Proof Outline Logic\", Technical Report, Cornell\n  University, Ithaca, NY, 1995.\n\n  L. G. Tesler and H. J. Enea. 1968. A language design for concurrent\n  processes. In Proceedings of the April 30--May 2, 1968, spring joint\n  computer conference (AFIPS \u002768 (Spring)). ACM, New York, NY, USA, 403-408.\n  DOI\u003dhttp://dx.doi.org/10.1145/1468075.1468134"
  }
});
formatter.step({
  "line": 479,
  "name": "Note",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 480,
    "value": "Java is a trademark of Oracle, Inc.\n\nThe T Language depends upon the considerable orderly thinking that underlies\nthe complexity of the Java language. Many thanks to the creators of Java, to\nthe Sun and Oracle corporations for developing and supporting it, and to the\nJava Community for their work through the years.\n\nCopyright (c) 2017, George S. Cowan"
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
