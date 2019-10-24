$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("pl1aa_eTLeanTaP_eqivalence_truth.feature");
formatter.feature({
  "line": 1,
  "name": "Equivalence \u0026 True     (Tests for the eLeanTaP system)",
  "description": "\n  Copyright and license information at bottom of file.\n\n\n  In order to test the axioms and theorems about equivalence and truth in the \n  propositional calculus, we rely on Gries and Schneider\u0027s (1939) presentation \n  of a complete set of axioms and important theorems. The feature files are\n  awkwardly named in an effort to place them in a preferred reading order.\n\n  The input language for the logic uses a common set of logical operators:\n\n    equivalence \u003d\u003d\u003d                     inequivalence \u003d#\u003d\n    negation    -\n    implication \u003d\u003d\u003e                     consequence   \u003c\u003d\u003d\n    and         /\\                      or          \\/\n    equality    (a\u003db)                   inequality    (a#\u003db)\n    predicates  p(a) /\\ q(b)            functionals   (f(a) \u003d g(b))\n    for all     all(X,p(X))             there exists  ex(X,p(X))\n                all(X, range-of-X, body)              ex (X, range-of-X, body)\n\n  This file provides a sort of definition of \"true\" and examples and tests of\n  logical equivalence. The other language elements are presented in separate \n  feature files.\n\n  The eTLeanTaP prover is a complete theorem prover for the first-order \n  predicate calculus with equality and functionals. It was designed for use by \n  the compiler for the T programming language. Therefore it is important that \n  it be able to check that simple omissions of intermediate statements in \n  proofs are valid and to fail in a consistent way without regard for the \n  processing power of a particular computer. Because it does not report the \n  proofs it discovers as readable proofs, its use as a theorem prover is \n  limited. It is based on the leanTaP 1.1 prover. Additional information about \n  this approach to theorem proving can be found in (Smullyan, 1971), \n  (Smullyan, 2014), and at\n\n    http://www.uni-koblenz.de/~beckert/leantap/",
  "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system)",
  "keyword": "Feature"
});
formatter.background({
  "line": 40,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 41,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 257411176,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 103800983,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 43,
      "value": "#  And Java debugging"
    },
    {
      "line": 44,
      "value": "#  And using feature \"pl1aa_eTLeanTaP_eqivalence_truth\""
    }
  ],
  "line": 47,
  "name": "Example of a simple non-theorem",
  "description": "\n  If an arbitrary formula has no support for either truth or falsity, then it\n  cannot be proven.\n\n  A proposition all by itself, is not necessarily false, it is just that its \n  statement as a truth is unsupported.",
  "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);example-of-a-simple-non-theorem",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 55,
  "name": "Formula \"p\" is not a theorem",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_not_a_theorem(String)"
});
formatter.result({
  "duration": 38587061,
  "status": "passed"
});
formatter.background({
  "line": 40,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 41,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 27487,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 33924909,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Another simple non-theorem",
  "description": "\n  Two arbitrary propositions are not necessarily equivalent.",
  "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);another-simple-non-theorem",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 62,
  "name": "Formula \"p \u003d\u003d\u003d q\" is not a theorem",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p \u003d\u003d\u003d q",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_not_a_theorem(String)"
});
formatter.result({
  "duration": 148519323,
  "status": "passed"
});
formatter.background({
  "line": 40,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 41,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 34872,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 41759983,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Axiom: associativity of \u003d\u003d\u003d (3.1)",
  "description": "\n  The first formula below is written in a form that highlights the conceptual \n  notion of associativity and is the form that we normally expect to see. But \n  its validity implies that parentheses are unnecessary and, if they are \n  included, syntactically matching parentheses may be placed arbitrarily; \n  therefore, the second and third statements are also correct.",
  "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);axiom:-associativity-of-\u003d\u003d\u003d-(3.1)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 73,
  "name": "Formula \"((p\u003d\u003d\u003dq) \u003d\u003d\u003d r) \u003d\u003d\u003d (p \u003d\u003d\u003d (q\u003d\u003d\u003dr))\" is a theorem",
  "keyword": "* "
});
formatter.step({
  "line": 75,
  "name": "Formula \"p \u003d\u003d\u003d q \u003d\u003d\u003d r \u003d\u003d\u003d p \u003d\u003d\u003d q \u003d\u003d\u003d r\" is a theorem",
  "keyword": "* "
});
formatter.step({
  "line": 77,
  "name": "Formula \"(p\u003d\u003d\u003dq) \u003d\u003d\u003d (r\u003d\u003d\u003dp) \u003d\u003d\u003d (q\u003d\u003d\u003dr)\" is a theorem",
  "keyword": "* "
});
formatter.step({
  "line": 79,
  "name": "Note",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 80,
    "value": "If you find the last formulation above particularly mystifying, your mind is \nprobably making the same mistake that mine always does: interpreting the \u003d\u003d\u003d \nas a conjunctive (chained) operator instead of as an associative operator. \n\nThe use of associativity to add parentheses any way you like can be useful \nin simplifying proofs. Gries \u0026 Schneider (1993, p.43) often use \nassociativity to state theorems with as few parentheses as possible to make \nthis clear. I sometimes add extra spaces as fake parentheses in order to \ngroup expressions so that the conceptual point does not get lost. "
  }
});
formatter.match({
  "arguments": [
    {
      "val": "((p\u003d\u003d\u003dq) \u003d\u003d\u003d r) \u003d\u003d\u003d (p \u003d\u003d\u003d (q\u003d\u003d\u003dr))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 603052061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "p \u003d\u003d\u003d q \u003d\u003d\u003d r \u003d\u003d\u003d p \u003d\u003d\u003d q \u003d\u003d\u003d r",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 1012031175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(p\u003d\u003d\u003dq) \u003d\u003d\u003d (r\u003d\u003d\u003dp) \u003d\u003d\u003d (q\u003d\u003d\u003dr)",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 424638595,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.notes(String)"
});
formatter.result({
  "duration": 2053742,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 92,
  "name": "Simple Examples",
  "description": "\nIn the following table, parenthetic numbers are a reference to the theorems \ncollected in the final pages of Gries \u0026 Schneider, A Logical Approach to \nDiscrete Math, 1993.",
  "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 98,
  "name": "the FOP is \"\u003cStatement\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "it is a \"\u003cResult\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "Note that \"\u003cNote\u003e\"",
  "keyword": "* "
});
formatter.examples({
  "line": 102,
  "name": "",
  "description": "",
  "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;",
  "rows": [
    {
      "cells": [
        "Result",
        "Statement",
        "Note"
      ],
      "line": 103,
      "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;;1"
    },
    {
      "comments": [
        {
          "line": 104,
          "value": "#   |-----------|---------------------------|----------------------------------|"
        }
      ],
      "cells": [
        "theorem",
        "(p \u003d\u003d\u003d q) \u003d\u003d\u003d (q \u003d\u003d\u003d p)",
        "Symmetry of \u003d\u003d\u003d (3.2)"
      ],
      "line": 105,
      "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;;2"
    },
    {
      "cells": [
        "theorem",
        "p \u003d\u003d\u003d q   \u003d\u003d\u003d   q \u003d\u003d\u003d p",
        "Symmetry, using associativity"
      ],
      "line": 106,
      "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;;3"
    },
    {
      "cells": [
        "theorem",
        "((p \u003d\u003d\u003d q) \u003d\u003d\u003d  q) \u003d\u003d\u003d p",
        "Another associativity"
      ],
      "line": 107,
      "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;;4"
    },
    {
      "cells": [
        "theorem",
        "(p \u003d\u003d\u003d(q \u003d\u003d\u003d  q)) \u003d\u003d\u003d p",
        "Another associativity"
      ],
      "line": 108,
      "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;;5"
    },
    {
      "cells": [
        "theorem",
        "p \u003d\u003d\u003d ((q \u003d\u003d\u003d q) \u003d\u003d\u003d p)",
        "Another associativity"
      ],
      "line": 109,
      "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;;6"
    },
    {
      "cells": [
        "theorem",
        "p \u003d\u003d\u003d (q \u003d\u003d\u003d (q \u003d\u003d\u003d p))",
        "Another associativity"
      ],
      "line": 110,
      "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;;7"
    },
    {
      "cells": [
        "theorem",
        "true \u003d\u003d\u003d p   \u003d\u003d\u003d  p",
        "true is the Identity of \u003d\u003d\u003d (3.3)"
      ],
      "line": 111,
      "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;;8"
    },
    {
      "cells": [
        "theorem",
        "true",
        "/ representation of true as a  \\"
      ],
      "line": 112,
      "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;;9"
    },
    {
      "cells": [
        "non-theorem",
        "-true",
        "\\ proposition (3.4)            /"
      ],
      "line": 113,
      "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;;10"
    },
    {
      "cells": [
        "theorem",
        "p \u003d\u003d\u003d p",
        "\u003d\u003d\u003d is reflexive G\u0026S 3.5"
      ],
      "line": 114,
      "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 40,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 41,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 32820,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 36514856,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 104,
      "value": "#   |-----------|---------------------------|----------------------------------|"
    }
  ],
  "line": 105,
  "name": "Simple Examples",
  "description": "\nIn the following table, parenthetic numbers are a reference to the theorems \ncollected in the final pages of Gries \u0026 Schneider, A Logical Approach to \nDiscrete Math, 1993.",
  "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 98,
  "name": "the FOP is \"(p \u003d\u003d\u003d q) \u003d\u003d\u003d (q \u003d\u003d\u003d p)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "Note that \"Symmetry of \u003d\u003d\u003d (3.2)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "(p \u003d\u003d\u003d q) \u003d\u003d\u003d (q \u003d\u003d\u003d p)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 235898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 210619401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Symmetry of \u003d\u003d\u003d (3.2)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 64000,
  "status": "passed"
});
formatter.background({
  "line": 40,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 41,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 31590,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 24573529,
  "status": "passed"
});
formatter.scenario({
  "line": 106,
  "name": "Simple Examples",
  "description": "\nIn the following table, parenthetic numbers are a reference to the theorems \ncollected in the final pages of Gries \u0026 Schneider, A Logical Approach to \nDiscrete Math, 1993.",
  "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 98,
  "name": "the FOP is \"p \u003d\u003d\u003d q   \u003d\u003d\u003d   q \u003d\u003d\u003d p\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "Note that \"Symmetry, using associativity\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p \u003d\u003d\u003d q   \u003d\u003d\u003d   q \u003d\u003d\u003d p",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 187077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 260853226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Symmetry, using associativity",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 57847,
  "status": "passed"
});
formatter.background({
  "line": 40,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 41,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 29538,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 19909735,
  "status": "passed"
});
formatter.scenario({
  "line": 107,
  "name": "Simple Examples",
  "description": "\nIn the following table, parenthetic numbers are a reference to the theorems \ncollected in the final pages of Gries \u0026 Schneider, A Logical Approach to \nDiscrete Math, 1993.",
  "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 98,
  "name": "the FOP is \"((p \u003d\u003d\u003d q) \u003d\u003d\u003d  q) \u003d\u003d\u003d p\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "Note that \"Another associativity\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "((p \u003d\u003d\u003d q) \u003d\u003d\u003d  q) \u003d\u003d\u003d p",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 96000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 204872942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Another associativity",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 58256,
  "status": "passed"
});
formatter.background({
  "line": 40,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 41,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 33231,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 16780711,
  "status": "passed"
});
formatter.scenario({
  "line": 108,
  "name": "Simple Examples",
  "description": "\nIn the following table, parenthetic numbers are a reference to the theorems \ncollected in the final pages of Gries \u0026 Schneider, A Logical Approach to \nDiscrete Math, 1993.",
  "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 98,
  "name": "the FOP is \"(p \u003d\u003d\u003d(q \u003d\u003d\u003d  q)) \u003d\u003d\u003d p\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "Note that \"Another associativity\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "(p \u003d\u003d\u003d(q \u003d\u003d\u003d  q)) \u003d\u003d\u003d p",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 92308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 256041331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Another associativity",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 80000,
  "status": "passed"
});
formatter.background({
  "line": 40,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 41,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 41025,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 84623965,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "Simple Examples",
  "description": "\nIn the following table, parenthetic numbers are a reference to the theorems \ncollected in the final pages of Gries \u0026 Schneider, A Logical Approach to \nDiscrete Math, 1993.",
  "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 98,
  "name": "the FOP is \"p \u003d\u003d\u003d ((q \u003d\u003d\u003d q) \u003d\u003d\u003d p)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "Note that \"Another associativity\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p \u003d\u003d\u003d ((q \u003d\u003d\u003d q) \u003d\u003d\u003d p)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 114872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 217010783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Another associativity",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 58256,
  "status": "passed"
});
formatter.background({
  "line": 40,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 41,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 47589,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 14596507,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "Simple Examples",
  "description": "\nIn the following table, parenthetic numbers are a reference to the theorems \ncollected in the final pages of Gries \u0026 Schneider, A Logical Approach to \nDiscrete Math, 1993.",
  "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 98,
  "name": "the FOP is \"p \u003d\u003d\u003d (q \u003d\u003d\u003d (q \u003d\u003d\u003d p))\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "Note that \"Another associativity\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p \u003d\u003d\u003d (q \u003d\u003d\u003d (q \u003d\u003d\u003d p))",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 148923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 183453873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Another associativity",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 57436,
  "status": "passed"
});
formatter.background({
  "line": 40,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 41,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 26667,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 14576405,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "Simple Examples",
  "description": "\nIn the following table, parenthetic numbers are a reference to the theorems \ncollected in the final pages of Gries \u0026 Schneider, A Logical Approach to \nDiscrete Math, 1993.",
  "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 98,
  "name": "the FOP is \"true \u003d\u003d\u003d p   \u003d\u003d\u003d  p\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "Note that \"true is the Identity of \u003d\u003d\u003d (3.3)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "true \u003d\u003d\u003d p   \u003d\u003d\u003d  p",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 98462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 100210420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true is the Identity of \u003d\u003d\u003d (3.3)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 70974,
  "status": "passed"
});
formatter.background({
  "line": 40,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 41,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 47589,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 29702962,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "Simple Examples",
  "description": "\nIn the following table, parenthetic numbers are a reference to the theorems \ncollected in the final pages of Gries \u0026 Schneider, A Logical Approach to \nDiscrete Math, 1993.",
  "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 98,
  "name": "the FOP is \"true\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "Note that \"/ representation of true as a  \\\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 88205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 5438357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/ representation of true as a  \\",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 50871,
  "status": "passed"
});
formatter.background({
  "line": 40,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 41,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 58256,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 16292916,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "Simple Examples",
  "description": "\nIn the following table, parenthetic numbers are a reference to the theorems \ncollected in the final pages of Gries \u0026 Schneider, A Logical Approach to \nDiscrete Math, 1993.",
  "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 98,
  "name": "the FOP is \"-true\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "it is a \"non-theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "Note that \"\\ proposition (3.4)            /\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "-true",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 87795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "non-theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 5397741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\\ proposition (3.4)            /",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 52923,
  "status": "passed"
});
formatter.background({
  "line": 40,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 41,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 37744,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 16927173,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "Simple Examples",
  "description": "\nIn the following table, parenthetic numbers are a reference to the theorems \ncollected in the final pages of Gries \u0026 Schneider, A Logical Approach to \nDiscrete Math, 1993.",
  "id": "equivalence-\u0026-true-----(tests-for-the-eleantap-system);simple-examples;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 98,
  "name": "the FOP is \"p \u003d\u003d\u003d p\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "Note that \"\u003d\u003d\u003d is reflexive G\u0026S 3.5\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p \u003d\u003d\u003d p",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 89436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 68025818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003d\u003d\u003d is reflexive G\u0026S 3.5",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 75897,
  "status": "passed"
});
formatter.uri("pl1ba_eTLeanTaP_negation_false.feature");
formatter.feature({
  "line": 1,
  "name": "Negation \u0026 False - eLeanTaP 1.0 (for T Language 0.1)",
  "description": "  Copyright and license information at bottom of file.\n\n  This file contains the tests for the axioms and theorems about negation and \n  falsity in the propositional calculus. We rely on (Gries\u0026Schneider, 1993) in \n  testing a complete set of theorems.\n\n  Background information on the prover and its language is in the feature file\n  pl1aa_eLeanTap_eqivalence_truth.feature.",
  "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1)",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 15,
      "value": "#  And Java debugging"
    },
    {
      "line": 16,
      "value": "#  And using feature \"pl1ba_eTLeanTaP_negation_false\""
    }
  ],
  "line": 18,
  "name": "Simple Examples",
  "description": "",
  "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"\u003cStatement\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"\u003cResult\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"\u003cNote\u003e\"",
  "keyword": "* "
});
formatter.examples({
  "comments": [
    {
      "line": 24,
      "value": "# In the following table, parenthetic numbers are a reference to the the"
    },
    {
      "line": 25,
      "value": "# theorems collected in the final pages of David Gries \u0026 Fred B. Schneider, A"
    },
    {
      "line": 26,
      "value": "# Logical Approach to Discrete Math, 1993. For instance, (3.8) refers to their"
    },
    {
      "line": 27,
      "value": "# Axiom, \"Definition of false\"."
    }
  ],
  "line": 29,
  "name": "",
  "description": "",
  "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;",
  "rows": [
    {
      "cells": [
        "Result",
        "Statement",
        "Note"
      ],
      "line": 30,
      "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;;1"
    },
    {
      "cells": [
        "theorem",
        "false \u003d\u003d\u003d -true",
        "Def of false (3.8)"
      ],
      "line": 31,
      "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;;2"
    },
    {
      "cells": [
        "theorem",
        "-(p \u003d\u003d\u003d q) \u003d\u003d\u003d  -p \u003d\u003d\u003d  q",
        "Distributivity - over \u003d\u003d\u003d (3.9)"
      ],
      "line": 32,
      "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;;3"
    },
    {
      "cells": [
        "non-theorem",
        "-(p \u003d\u003d\u003d q) \u003d\u003d\u003d (-p \u003d\u003d\u003d -q )",
        "Invalid distributivity"
      ],
      "line": 33,
      "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;;4"
    },
    {
      "cells": [
        "theorem",
        "((p \u003d#\u003d q)) \u003d\u003d\u003d -(p \u003d\u003d\u003d q)",
        "Def of inequality  \u003d#\u003d  (3.10)"
      ],
      "line": 34,
      "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;;5"
    },
    {
      "cells": [
        "theorem",
        "-p \u003d\u003d\u003d q \u003d\u003d\u003d p \u003d\u003d\u003d -q",
        "Theorem (3.11)"
      ],
      "line": 35,
      "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;;6"
    },
    {
      "cells": [
        "theorem",
        "-(-p) \u003d\u003d\u003d p",
        "Double negation (3.12)"
      ],
      "line": 36,
      "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;;7"
    },
    {
      "cells": [
        "theorem",
        "-false \u003d\u003d\u003d true",
        "Negation of false (3.13)"
      ],
      "line": 37,
      "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;;8"
    },
    {
      "cells": [
        "non-theorem",
        "false \u003d\u003d\u003d true",
        "false and true are distinct"
      ],
      "line": 38,
      "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;;9"
    },
    {
      "cells": [
        "theorem",
        "-p \u003d\u003d\u003d p \u003d\u003d\u003d false",
        "Theorem (3.15)"
      ],
      "line": 39,
      "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;;10"
    },
    {
      "cells": [
        "theorem",
        "(p \u003d#\u003d q) \u003d\u003d\u003d (q \u003d#\u003d p)",
        "Symmetry of \u003d#\u003d (3.16)"
      ],
      "line": 40,
      "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 50872,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 18708505,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Simple Examples",
  "description": "",
  "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"false \u003d\u003d\u003d -true\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Def of false (3.8)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "false \u003d\u003d\u003d -true",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 98871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 30034039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Def of false (3.8)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 79589,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 35692,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 15472814,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Simple Examples",
  "description": "",
  "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"-(p \u003d\u003d\u003d q) \u003d\u003d\u003d  -p \u003d\u003d\u003d  q\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Distributivity - over \u003d\u003d\u003d (3.9)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "-(p \u003d\u003d\u003d q) \u003d\u003d\u003d  -p \u003d\u003d\u003d  q",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 109949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 238243594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Distributivity - over \u003d\u003d\u003d (3.9)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 84923,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 508718,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 14246148,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Simple Examples",
  "description": "",
  "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"-(p \u003d\u003d\u003d q) \u003d\u003d\u003d (-p \u003d\u003d\u003d -q )\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"non-theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Invalid distributivity\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "-(p \u003d\u003d\u003d q) \u003d\u003d\u003d (-p \u003d\u003d\u003d -q )",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 125538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "non-theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 159830088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid distributivity",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 45128,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 52513,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 19014556,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Simple Examples",
  "description": "",
  "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"((p \u003d#\u003d q)) \u003d\u003d\u003d -(p \u003d\u003d\u003d q)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Def of inequality  \u003d#\u003d  (3.10)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "((p \u003d#\u003d q)) \u003d\u003d\u003d -(p \u003d\u003d\u003d q)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 108308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 163359523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Def of inequality  \u003d#\u003d  (3.10)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 70564,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 29128,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 19506043,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Simple Examples",
  "description": "",
  "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"-p \u003d\u003d\u003d q \u003d\u003d\u003d p \u003d\u003d\u003d -q\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Theorem (3.11)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "-p \u003d\u003d\u003d q \u003d\u003d\u003d p \u003d\u003d\u003d -q",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 98051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 232734674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Theorem (3.11)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 74667,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 36513,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 16358147,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Simple Examples",
  "description": "",
  "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"-(-p) \u003d\u003d\u003d p\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Double negation (3.12)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "-(-p) \u003d\u003d\u003d p",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 396718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 34983780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double negation (3.12)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 374154,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 20102,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 11677944,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Simple Examples",
  "description": "",
  "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"-false \u003d\u003d\u003d true\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Negation of false (3.13)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "-false \u003d\u003d\u003d true",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 75897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 18102557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Negation of false (3.13)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 62359,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 20513,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13731686,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Simple Examples",
  "description": "",
  "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"false \u003d\u003d\u003d true\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"non-theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"false and true are distinct\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "false \u003d\u003d\u003d true",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 63589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "non-theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 22593221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false and true are distinct",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 88205,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 36103,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 18635069,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Simple Examples",
  "description": "",
  "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"-p \u003d\u003d\u003d p \u003d\u003d\u003d false\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Theorem (3.15)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "-p \u003d\u003d\u003d p \u003d\u003d\u003d false",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 105436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 59039155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Theorem (3.15)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 84103,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 26667,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 15057225,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Simple Examples",
  "description": "",
  "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);simple-examples;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"(p \u003d#\u003d q) \u003d\u003d\u003d (q \u003d#\u003d p)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Symmetry of \u003d#\u003d (3.16)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "(p \u003d#\u003d q) \u003d\u003d\u003d (q \u003d#\u003d p)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 177641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 165646291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Symmetry of \u003d#\u003d (3.16)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 51282,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 28308,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 22118145,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Associativity of \u003d#\u003d (3.17)",
  "description": "",
  "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);associativity-of-\u003d#\u003d-(3.17)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "Formula \"((p\u003d#\u003dq)\u003d#\u003dr) \u003d\u003d\u003d (p\u003d#\u003d(q\u003d#\u003dr))\" is a theorem",
  "keyword": "* "
});
formatter.step({
  "line": 47,
  "name": "Formula \"(p\u003d#\u003dq \u003d#\u003d r) \u003d\u003d\u003d (p \u003d#\u003d q\u003d#\u003dr)\" is a theorem",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "((p\u003d#\u003dq)\u003d#\u003dr) \u003d\u003d\u003d (p\u003d#\u003d(q\u003d#\u003dr))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 500402667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(p\u003d#\u003dq \u003d#\u003d r) \u003d\u003d\u003d (p \u003d#\u003d q\u003d#\u003dr)",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 411995728,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 25436,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 12151790,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Mutual associativity (3.18) and interchangeability (3.19)",
  "description": "",
  "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);mutual-associativity-(3.18)-and-interchangeability-(3.19)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 52,
  "name": "Formula \"((p\u003d#\u003dq)\u003d\u003d\u003dr)  \u003d\u003d\u003d  (p\u003d#\u003d(q\u003d\u003d\u003dr))\" is a theorem",
  "keyword": "* "
});
formatter.step({
  "line": 54,
  "name": "Formula   \"p\u003d#\u003dq \u003d\u003d\u003dr   \u003d\u003d\u003d   p\u003d\u003d\u003d q\u003d#\u003dr\"   is a theorem",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "((p\u003d#\u003dq)\u003d\u003d\u003dr)  \u003d\u003d\u003d  (p\u003d#\u003d(q\u003d\u003d\u003dr))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 381584664,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "p\u003d#\u003dq \u003d\u003d\u003dr   \u003d\u003d\u003d   p\u003d\u003d\u003d q\u003d#\u003dr",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 844139551,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 25436,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 12779892,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Using Mutual Associativity to restate Associativity of \u003d#\u003d",
  "description": "\n  We don\u0027t need parentheses for strings of \"\u003d\u003d\u003d\" and \"\u003d#\u003d\" because of mutual \n  associativity, and in fact, if we need it to make a proof simpler, we can \n  swap them around as we please because of their interchangeability; we can \n  even swap around the propositional variables because of the symmetry of \n  \"\u003d\u003d\u003d\" and \"\u003d#\u003d\".",
  "id": "negation-\u0026-false---eleantap-1.0-(for-t-language-0.1);using-mutual-associativity-to-restate-associativity-of-\u003d#\u003d",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 65,
  "name": "Formula \"p \u003d#\u003d q \u003d#\u003d r \u003d\u003d\u003d p \u003d#\u003d q \u003d#\u003d r\" is a theorem",
  "keyword": "* "
});
formatter.step({
  "line": 67,
  "name": "Formula \"p \u003d\u003d\u003d q \u003d#\u003d r \u003d#\u003d p \u003d#\u003d q \u003d#\u003d r\" is a theorem",
  "keyword": "* "
});
formatter.step({
  "line": 69,
  "name": "Formula \"p \u003d\u003d\u003d p \u003d#\u003d q \u003d#\u003d q \u003d#\u003d r \u003d#\u003d r\" is a theorem",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p \u003d#\u003d q \u003d#\u003d r \u003d\u003d\u003d p \u003d#\u003d q \u003d#\u003d r",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 885711636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "p \u003d\u003d\u003d q \u003d#\u003d r \u003d#\u003d p \u003d#\u003d q \u003d#\u003d r",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 866891542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "p \u003d\u003d\u003d p \u003d#\u003d q \u003d#\u003d q \u003d#\u003d r \u003d#\u003d r",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 862032877,
  "status": "passed"
});
formatter.uri("pl1ca_eTLeanTaP_disjunction.feature");
formatter.feature({
  "line": 1,
  "name": "Disjunction     (Tests for the eLeanTaP system)",
  "description": "  Copyright and license information at bottom of file.\n\n  This file contains the tests for the axioms and theorems about disjunction \n  in the propositional calculus, which we represent in the input language with \n  \"\\/\" and in the internal language with Prolog\u0027s \";\". We rely on \n  (Gries\u0026Schneider, 1993) in testing a complete set of theorems.\n\n  Background information on the prover and its language is in the feature file\n  pl1aa_eLeanTap_eqivalence_truth.feature.",
  "id": "disjunction-----(tests-for-the-eleantap-system)",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 16,
      "value": "#  And Java debugging"
    },
    {
      "line": 17,
      "value": "#  And using feature \"pl1ca_eTLeanTaP_disjunction\""
    }
  ],
  "line": 20,
  "name": "Simple Examples",
  "description": "",
  "id": "disjunction-----(tests-for-the-eleantap-system);simple-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "the FOP is \"\u003cStatement\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "it is a \"\u003cResult\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Note that \"\u003cNote\u003e\"",
  "keyword": "* "
});
formatter.examples({
  "comments": [
    {
      "line": 26,
      "value": "# In the following, parenthetic numbers are a reference to the the"
    },
    {
      "line": 27,
      "value": "# theorems collected in the final pages of David Gries \u0026 Fred B. Schneider, A"
    },
    {
      "line": 28,
      "value": "# Logical Approach to Discrete Math, 1993. For instance, (3.8) refers to their"
    },
    {
      "line": 29,
      "value": "# Axiom, \"Definition of false\"."
    }
  ],
  "line": 31,
  "name": "",
  "description": "",
  "id": "disjunction-----(tests-for-the-eleantap-system);simple-examples;",
  "rows": [
    {
      "cells": [
        "Result",
        "Statement",
        "Note"
      ],
      "line": 32,
      "id": "disjunction-----(tests-for-the-eleantap-system);simple-examples;;1"
    },
    {
      "comments": [
        {
          "line": 33,
          "value": "#   |-----------|-----------------------------|--------------------------------|"
        }
      ],
      "cells": [
        "theorem",
        "p \\/ q \u003d\u003d\u003d q \\/ p",
        "Axiom: Symmetry of \\/ (3.24)"
      ],
      "line": 34,
      "id": "disjunction-----(tests-for-the-eleantap-system);simple-examples;;2"
    },
    {
      "cells": [
        "theorem",
        "(p\\/q) \\/ r \u003d\u003d\u003d p \\/ (q\\/r)",
        "Axiom: Associativity (3.25)"
      ],
      "line": 35,
      "id": "disjunction-----(tests-for-the-eleantap-system);simple-examples;;3"
    },
    {
      "cells": [
        "theorem",
        "p \\/ p \u003d\u003d\u003d p",
        "Axiom: Idempotency (3.26)"
      ],
      "line": 36,
      "id": "disjunction-----(tests-for-the-eleantap-system);simple-examples;;4"
    },
    {
      "cells": [
        "theorem",
        "p \\/ -p",
        "Axiom: Excluded Middle (3.28)"
      ],
      "line": 37,
      "id": "disjunction-----(tests-for-the-eleantap-system);simple-examples;;5"
    },
    {
      "cells": [
        "theorem",
        "p \\/ true \u003d\u003d\u003d true",
        "Zero of \\/ (3.29)"
      ],
      "line": 38,
      "id": "disjunction-----(tests-for-the-eleantap-system);simple-examples;;6"
    },
    {
      "cells": [
        "theorem",
        "p \\/ false \u003d\u003d\u003d p",
        "Identity of \\/ (3.30)"
      ],
      "line": 39,
      "id": "disjunction-----(tests-for-the-eleantap-system);simple-examples;;7"
    },
    {
      "cells": [
        "theorem",
        "p\\/q \u003d\u003d\u003d p\\/ -q \u003d\u003d\u003d p",
        "Theorem (3.32)"
      ],
      "line": 40,
      "id": "disjunction-----(tests-for-the-eleantap-system);simple-examples;;8"
    },
    {
      "cells": [
        "non-theorem",
        "p \\/ q \u003d\u003d\u003d p \u003d\u003d\u003d q",
        "nonsense"
      ],
      "line": 41,
      "id": "disjunction-----(tests-for-the-eleantap-system);simple-examples;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 23385,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 9668919,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 33,
      "value": "#   |-----------|-----------------------------|--------------------------------|"
    }
  ],
  "line": 34,
  "name": "Simple Examples",
  "description": "",
  "id": "disjunction-----(tests-for-the-eleantap-system);simple-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "the FOP is \"p \\/ q \u003d\u003d\u003d q \\/ p\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Note that \"Axiom: Symmetry of \\/ (3.24)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p \\/ q \u003d\u003d\u003d q \\/ p",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 101333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 59681207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axiom: Symmetry of \\/ (3.24)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 64410,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 44717,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 15746455,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Simple Examples",
  "description": "",
  "id": "disjunction-----(tests-for-the-eleantap-system);simple-examples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "the FOP is \"(p\\/q) \\/ r \u003d\u003d\u003d p \\/ (q\\/r)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Note that \"Axiom: Associativity (3.25)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "(p\\/q) \\/ r \u003d\u003d\u003d p \\/ (q\\/r)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 118975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 118836054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axiom: Associativity (3.25)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 68513,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 30769,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 14676507,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Simple Examples",
  "description": "",
  "id": "disjunction-----(tests-for-the-eleantap-system);simple-examples;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "the FOP is \"p \\/ p \u003d\u003d\u003d p\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Note that \"Axiom: Idempotency (3.26)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p \\/ p \u003d\u003d\u003d p",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 85333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 48559570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axiom: Idempotency (3.26)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 52103,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 33230,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 12916097,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Simple Examples",
  "description": "",
  "id": "disjunction-----(tests-for-the-eleantap-system);simple-examples;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "the FOP is \"p \\/ -p\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Note that \"Axiom: Excluded Middle (3.28)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p \\/ -p",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 86975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 16601430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axiom: Excluded Middle (3.28)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 44307,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 28308,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 12402867,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Simple Examples",
  "description": "",
  "id": "disjunction-----(tests-for-the-eleantap-system);simple-examples;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "the FOP is \"p \\/ true \u003d\u003d\u003d true\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Note that \"Zero of \\/ (3.29)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p \\/ true \u003d\u003d\u003d true",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 88205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 32247372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zero of \\/ (3.29)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 55384,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 25846,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 12875892,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Simple Examples",
  "description": "",
  "id": "disjunction-----(tests-for-the-eleantap-system);simple-examples;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "the FOP is \"p \\/ false \u003d\u003d\u003d p\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Note that \"Identity of \\/ (3.30)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p \\/ false \u003d\u003d\u003d p",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 79179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 44176803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Identity of \\/ (3.30)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 52923,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 31590,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 15887173,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Simple Examples",
  "description": "",
  "id": "disjunction-----(tests-for-the-eleantap-system);simple-examples;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "the FOP is \"p\\/q \u003d\u003d\u003d p\\/ -q \u003d\u003d\u003d p\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Note that \"Theorem (3.32)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p\\/q \u003d\u003d\u003d p\\/ -q \u003d\u003d\u003d p",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 82872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 185051001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Theorem (3.32)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 67282,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 31179,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13658661,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Simple Examples",
  "description": "",
  "id": "disjunction-----(tests-for-the-eleantap-system);simple-examples;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "the FOP is \"p \\/ q \u003d\u003d\u003d p \u003d\u003d\u003d q\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "it is a \"non-theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Note that \"nonsense\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p \\/ q \u003d\u003d\u003d p \u003d\u003d\u003d q",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 93538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "non-theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 125552769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nonsense",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 50461,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 58256,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 15358353,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Axiom: Distributivity of \\/ over \u003d\u003d\u003d (3.27)",
  "description": "",
  "id": "disjunction-----(tests-for-the-eleantap-system);axiom:-distributivity-of-\\/-over-\u003d\u003d\u003d-(3.27)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "Formula \"p \\/ (q \u003d\u003d\u003d r)   \u003d\u003d\u003d   (p \\/ q) \u003d\u003d\u003d (p \\/ r)\" is a theorem",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p \\/ (q \u003d\u003d\u003d r)   \u003d\u003d\u003d   (p \\/ q) \u003d\u003d\u003d (p \\/ r)",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 328472070,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 68103,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 12708508,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Axiom: Distributivity of \\/ over \\/ (3.31)",
  "description": "",
  "id": "disjunction-----(tests-for-the-eleantap-system);axiom:-distributivity-of-\\/-over-\\/-(3.31)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 51,
  "name": "Formula \"p \\/ (q \\/ r)   \u003d\u003d\u003d   (p \\/ q) \\/ (p \\/ r)\" is a theorem",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p \\/ (q \\/ r)   \u003d\u003d\u003d   (p \\/ q) \\/ (p \\/ r)",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 144918095,
  "status": "passed"
});
formatter.uri("pl1da_eTLeanTaP_conjunction.feature");
formatter.feature({
  "line": 1,
  "name": "Conjunction     (Tests for the eLeanTaP system)",
  "description": "  Copyright and license information at bottom of file.\n\n  This file contains the tests for the axioms and theorems about conjunction \n  in the propositional calculus, which we represent in the input language with \n  \"\\/\" and in the internal language with Prolog\u0027s \",\". We rely on \n  (Gries\u0026Schneider, 1993) in testing a complete set of theorems.\n\n  Background information on the prover and its language is in the feature file\n  pl1aa_eLeanTap_eqivalence_truth.feature.",
  "id": "conjunction-----(tests-for-the-eleantap-system)",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 16,
      "value": "#  And Java debugging"
    },
    {
      "line": 17,
      "value": "#  And using feature \"pl1da_eTLeanTaP_conjunction\""
    }
  ],
  "line": 19,
  "name": "Simple Examples",
  "description": "",
  "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the FOP is \"\u003cStatement\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "it is a \"\u003cResult\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Note that \"\u003cNote\u003e\"",
  "keyword": "* "
});
formatter.examples({
  "comments": [
    {
      "line": 25,
      "value": "# In the following, parenthetic numbers are a reference to the the"
    },
    {
      "line": 26,
      "value": "# theorems collected in the final pages of David Gries \u0026 Fred B. Schneider, A"
    },
    {
      "line": 27,
      "value": "# Logical Approach to Discrete Math, 1993. For instance, (3.8) refers to their"
    },
    {
      "line": 28,
      "value": "# Axiom, \"Definition of false\"."
    }
  ],
  "line": 30,
  "name": "",
  "description": "",
  "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;",
  "rows": [
    {
      "cells": [
        "Result",
        "Statement",
        "Note"
      ],
      "line": 31,
      "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;1"
    },
    {
      "comments": [
        {
          "line": 32,
          "value": "#-----------|-----------------------------|--------------------------------|"
        }
      ],
      "cells": [
        "theorem",
        "p/\\q \u003d\u003d\u003d p \u003d\u003d\u003d q \u003d\u003d\u003d q\\/p",
        "Axiom: Golden Rule (3.35)"
      ],
      "line": 33,
      "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;2"
    },
    {
      "cells": [
        "non-theorem",
        "p /\\ q \u003d\u003d\u003d p \u003d\u003d\u003d q",
        "nonsense ((f/\\f)\u003d\u003d\u003df) \u003d\u003d\u003d t"
      ],
      "line": 34,
      "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;3"
    },
    {
      "cells": [
        "theorem",
        "p /\\ q \u003d\u003d\u003d q /\\ p",
        "Symmetry (3.36)"
      ],
      "line": 35,
      "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;4"
    },
    {
      "cells": [
        "theorem",
        "(p/\\q) /\\ r \u003d\u003d\u003d p /\\ (q/\\r)",
        "Associativity (3.37)"
      ],
      "line": 36,
      "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;5"
    },
    {
      "cells": [
        "theorem",
        "p /\\ p \u003d\u003d\u003d p",
        "Idempotency (3.38)"
      ],
      "line": 37,
      "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;6"
    },
    {
      "cells": [
        "theorem",
        "p /\\ true \u003d\u003d\u003d p",
        "Identity of /\\ (3.39)"
      ],
      "line": 38,
      "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;7"
    },
    {
      "cells": [
        "theorem",
        "p /\\ false \u003d\u003d\u003d false",
        "Zero of /\\ (3.40)"
      ],
      "line": 39,
      "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;8"
    },
    {
      "cells": [
        "theorem",
        "p/\\(q/\\r) \u003d\u003d\u003d (p/\\q)/\\(p/\\r)",
        "/\\ distributes over /\\ (3.41)"
      ],
      "line": 40,
      "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;9"
    },
    {
      "cells": [
        "theorem",
        "p /\\ -p \u003d\u003d\u003d false",
        "Contradiction (3.42)"
      ],
      "line": 41,
      "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;10"
    },
    {
      "cells": [
        "theorem",
        "p/\\(p\\/q) \u003d\u003d\u003d p",
        "Absorbtion (3.43)"
      ],
      "line": 42,
      "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;11"
    },
    {
      "cells": [
        "theorem",
        "p\\/(p/\\q) \u003d\u003d\u003d p",
        "Absorbtion (3.43)"
      ],
      "line": 43,
      "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;12"
    },
    {
      "cells": [
        "theorem",
        "p/\\(-p\\/q) \u003d\u003d\u003d p/\\q",
        "Absorbtion (3.44)"
      ],
      "line": 44,
      "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;13"
    },
    {
      "cells": [
        "theorem",
        "p\\/(-p/\\q) \u003d\u003d\u003d p\\/q",
        "Absorbtion (3.44)"
      ],
      "line": 45,
      "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;14"
    },
    {
      "cells": [
        "theorem",
        "p\\/(q/\\r) \u003d\u003d\u003d (p\\/q)/\\(p\\/r)",
        "Absorbtion (3.45)"
      ],
      "line": 46,
      "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;15"
    },
    {
      "cells": [
        "theorem",
        "p/\\(q\\/r) \u003d\u003d\u003d (p/\\q)\\/(p/\\r)",
        "Absorbtion (3.46)"
      ],
      "line": 47,
      "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;16"
    },
    {
      "cells": [
        "theorem",
        "-(p/\\q) \u003d\u003d\u003d (-p \\/ -q)",
        "De MorgaN (3.47)"
      ],
      "line": 48,
      "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;17"
    },
    {
      "cells": [
        "theorem",
        "-(p\\/q) \u003d\u003d\u003d (-p /\\ -q)",
        "De MorgaN (3.47)"
      ],
      "line": 49,
      "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;18"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 52923,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 14505840,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 32,
      "value": "#-----------|-----------------------------|--------------------------------|"
    }
  ],
  "line": 33,
  "name": "Simple Examples",
  "description": "",
  "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the FOP is \"p/\\q \u003d\u003d\u003d p \u003d\u003d\u003d q \u003d\u003d\u003d q\\/p\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Note that \"Axiom: Golden Rule (3.35)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p/\\q \u003d\u003d\u003d p \u003d\u003d\u003d q \u003d\u003d\u003d q\\/p",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 112410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 309743053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axiom: Golden Rule (3.35)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 38154,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 19692,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 16793429,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Simple Examples",
  "description": "",
  "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the FOP is \"p /\\ q \u003d\u003d\u003d p \u003d\u003d\u003d q\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "it is a \"non-theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Note that \"nonsense ((f/\\f)\u003d\u003d\u003df) \u003d\u003d\u003d t\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p /\\ q \u003d\u003d\u003d p \u003d\u003d\u003d q",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 130872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "non-theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 147569991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nonsense ((f/\\f)\u003d\u003d\u003df) \u003d\u003d\u003d t",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 47589,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 24615,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 15149942,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Simple Examples",
  "description": "",
  "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the FOP is \"p /\\ q \u003d\u003d\u003d q /\\ p\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Note that \"Symmetry (3.36)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p /\\ q \u003d\u003d\u003d q /\\ p",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 73436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 83538017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Symmetry (3.36)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 49231,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 27077,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 14735174,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Simple Examples",
  "description": "",
  "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the FOP is \"(p/\\q) /\\ r \u003d\u003d\u003d p /\\ (q/\\r)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Note that \"Associativity (3.37)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "(p/\\q) /\\ r \u003d\u003d\u003d p /\\ (q/\\r)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 84102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 132324869,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Associativity (3.37)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 53743,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 27487,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 16950968,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Simple Examples",
  "description": "",
  "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the FOP is \"p /\\ p \u003d\u003d\u003d p\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Note that \"Idempotency (3.38)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p /\\ p \u003d\u003d\u003d p",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 101744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 73743149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Idempotency (3.38)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 54564,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 24206,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 14368814,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Simple Examples",
  "description": "",
  "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the FOP is \"p /\\ true \u003d\u003d\u003d p\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Note that \"Identity of /\\ (3.39)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p /\\ true \u003d\u003d\u003d p",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 111590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 44594853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Identity of /\\ (3.39)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 60307,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 22154,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13042456,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Simple Examples",
  "description": "",
  "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the FOP is \"p /\\ false \u003d\u003d\u003d false\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Note that \"Zero of /\\ (3.40)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p /\\ false \u003d\u003d\u003d false",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 79590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 26994450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zero of /\\ (3.40)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 45538,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 26666,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 12503379,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Simple Examples",
  "description": "",
  "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the FOP is \"p/\\(q/\\r) \u003d\u003d\u003d (p/\\q)/\\(p/\\r)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Note that \"/\\ distributes over /\\ (3.41)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p/\\(q/\\r) \u003d\u003d\u003d (p/\\q)/\\(p/\\r)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 109538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 146661684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/\\ distributes over /\\ (3.41)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 55795,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 27487,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13673020,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Simple Examples",
  "description": "",
  "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the FOP is \"p /\\ -p \u003d\u003d\u003d false\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Note that \"Contradiction (3.42)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p /\\ -p \u003d\u003d\u003d false",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 84923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 36344601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contradiction (3.42)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 41025,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 25436,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 11766149,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Simple Examples",
  "description": "",
  "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the FOP is \"p/\\(p\\/q) \u003d\u003d\u003d p\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Note that \"Absorbtion (3.43)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p/\\(p\\/q) \u003d\u003d\u003d p",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 61128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 64663358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Absorbtion (3.43)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 57846,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 22974,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13994661,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Simple Examples",
  "description": "",
  "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the FOP is \"p\\/(p/\\q) \u003d\u003d\u003d p\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Note that \"Absorbtion (3.43)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p\\/(p/\\q) \u003d\u003d\u003d p",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 79179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 74244893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Absorbtion (3.43)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 46769,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 21743,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13463379,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Simple Examples",
  "description": "",
  "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the FOP is \"p/\\(-p\\/q) \u003d\u003d\u003d p/\\q\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Note that \"Absorbtion (3.44)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p/\\(-p\\/q) \u003d\u003d\u003d p/\\q",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 82461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 100546831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Absorbtion (3.44)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 64410,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 26666,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 12878764,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Simple Examples",
  "description": "",
  "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the FOP is \"p\\/(-p/\\q) \u003d\u003d\u003d p\\/q\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Note that \"Absorbtion (3.44)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p\\/(-p/\\q) \u003d\u003d\u003d p\\/q",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 60718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 99476882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Absorbtion (3.44)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 54974,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 33231,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 14272405,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Simple Examples",
  "description": "",
  "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the FOP is \"p\\/(q/\\r) \u003d\u003d\u003d (p\\/q)/\\(p\\/r)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Note that \"Absorbtion (3.45)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p\\/(q/\\r) \u003d\u003d\u003d (p\\/q)/\\(p\\/r)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 196103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 135051842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Absorbtion (3.45)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 39385,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 27488,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 11679995,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Simple Examples",
  "description": "",
  "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the FOP is \"p/\\(q\\/r) \u003d\u003d\u003d (p/\\q)\\/(p/\\r)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Note that \"Absorbtion (3.46)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p/\\(q\\/r) \u003d\u003d\u003d (p/\\q)\\/(p/\\r)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 56205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 140747840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Absorbtion (3.46)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 54974,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 143179,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 15723070,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Simple Examples",
  "description": "",
  "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the FOP is \"-(p/\\q) \u003d\u003d\u003d (-p \\/ -q)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Note that \"De MorgaN (3.47)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "-(p/\\q) \u003d\u003d\u003d (-p \\/ -q)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 340103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 82596889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "De MorgaN (3.47)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 72205,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 31180,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 15282045,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Simple Examples",
  "description": "",
  "id": "conjunction-----(tests-for-the-eleantap-system);simple-examples;;18",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the FOP is \"-(p\\/q) \u003d\u003d\u003d (-p /\\ -q)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Note that \"De MorgaN (3.47)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "-(p\\/q) \u003d\u003d\u003d (-p /\\ -q)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 84513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 82751146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "De MorgaN (3.47)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 61539,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 28308,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 14251481,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 50,
      "value": "# TODO: WORKING HERE p.52"
    },
    {
      "line": 52,
      "value": "# Why do the following fail to parse?"
    },
    {
      "line": 53,
      "value": "#| theorem   | -(p/\\q) \u003d\u003d\u003d (-q\\/-p)        | De MorgaN (3.47)             |"
    },
    {
      "line": 54,
      "value": "#| theorem   | -(p\\/q) \u003d\u003d\u003d (-q/\\-p)        | De MorgaN (3.47)             |"
    }
  ],
  "line": 59,
  "name": "Axiom: Distributivity of \\/ over \u003d\u003d\u003d (3.27)",
  "description": "",
  "id": "conjunction-----(tests-for-the-eleantap-system);axiom:-distributivity-of-\\/-over-\u003d\u003d\u003d-(3.27)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 61,
  "name": "Formula \"p \\/ (q \u003d\u003d\u003d r)   \u003d\u003d\u003d   (p \\/ q) \u003d\u003d\u003d (p \\/ r)\" is a theorem",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p \\/ (q \u003d\u003d\u003d r)   \u003d\u003d\u003d   (p \\/ q) \u003d\u003d\u003d (p \\/ r)",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 319038638,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 32410,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 16929635,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Axiom: Distributivity of \\/ over \\/ (3.31)",
  "description": "",
  "id": "conjunction-----(tests-for-the-eleantap-system);axiom:-distributivity-of-\\/-over-\\/-(3.31)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 66,
  "name": "Formula \"p \\/ (q \\/ r)   \u003d\u003d\u003d   (p \\/ q) \\/ (p \\/ r)\" is a theorem",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p \\/ (q \\/ r)   \u003d\u003d\u003d   (p \\/ q) \\/ (p \\/ r)",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 139170815,
  "status": "passed"
});
formatter.uri("pl1fe_eTLeanTaP_equality.feature");
formatter.feature({
  "line": 1,
  "name": "Equality of objects     (Tests for the eLeanTaP system)",
  "description": "  Copyright and license information at bottom of file.\n\n  Here we provide tests of the equality proof features of the T language\n  compiler\u0027s theorem prover. The symbols \u003d and #\u003d are used to represent\n  equality and inequality.\n\n  Background information on the prover and its language is in the feature file\n  pl1aa_eLeanTap_eqivalence_truth.feature.",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system)",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 15,
      "value": "#  And Java debugging"
    },
    {
      "line": 16,
      "value": "#  And using feature \"pl1fe_eTLeanTaP_equality\""
    }
  ],
  "line": 18,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"\u003cStatement\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"\u003cResult\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"\u003cNote\u003e\"",
  "keyword": "* "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;",
  "rows": [
    {
      "cells": [
        "Result",
        "Statement",
        "Note"
      ],
      "line": 25,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;1"
    },
    {
      "comments": [
        {
          "line": 26,
          "value": "#-----------|---------------------------------|----------------------------|"
        }
      ],
      "cells": [
        "theorem",
        "f(a) \u003d f(a)",
        "Function \u003d reflexivity (1.2)"
      ],
      "line": 27,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;2"
    },
    {
      "cells": [
        "theorem",
        "a \u003d a",
        "Constant \u003d reflexivity (1.2)"
      ],
      "line": 28,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;3"
    },
    {
      "cells": [
        "theorem",
        "a \u003d a \u003d\u003d\u003d true",
        "Identity of \u003d, (3.3)"
      ],
      "line": 29,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;4"
    },
    {
      "cells": [
        "theorem",
        "a \u003d b \u003d\u003d\u003d b \u003d a",
        "Symmetry of \u003d, (1.3)"
      ],
      "line": 30,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;5"
    },
    {
      "cells": [
        "theorem",
        "-(a \u003d b) \u003d\u003d\u003d -(b \u003d a)",
        "Symmetry of \u003d, (1.3)"
      ],
      "line": 31,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;6"
    },
    {
      "cells": [
        "theorem",
        "a #\u003d b \u003d\u003d\u003d -(a \u003d b)",
        "Def of #\u003d (3.10)"
      ],
      "line": 32,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;7"
    },
    {
      "cells": [
        "theorem",
        "a #\u003d a \u003d\u003d\u003d false",
        "#\u003d is nonreflexive"
      ],
      "line": 33,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;8"
    },
    {
      "cells": [
        "theorem",
        "(a #\u003d b) \u003d\u003d\u003d (b #\u003d a)",
        "Symmetry of #\u003d, (3.16)"
      ],
      "line": 34,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;9"
    },
    {
      "cells": [
        "theorem",
        "f(a) \u003d f(b) \u003d\u003d\u003d  f(b) \u003d f(a)",
        "Symmetry of \u003d, (1.3)"
      ],
      "line": 35,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;10"
    },
    {
      "cells": [
        "theorem",
        "-(f(a)\u003df(b)) \u003d\u003d\u003d -(f(b)\u003df(a))",
        "Symmetry of \u003d, (1.3)"
      ],
      "line": 36,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;11"
    },
    {
      "cells": [
        "theorem",
        "f(a) #\u003d f(b) \u003d\u003d\u003d  f(b) #\u003d f(a)",
        "Symmetry of #\u003d, (3.16)"
      ],
      "line": 37,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;12"
    },
    {
      "cells": [
        "theorem",
        "((a\u003db) /\\ (b\u003dc) \u003d\u003d\u003e (a\u003dc))",
        "Transitivity of \u003d, (1.4)"
      ],
      "line": 38,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;13"
    },
    {
      "cells": [
        "theorem",
        "(a\u003dc) \\/ -((a\u003db) /\\ (b\u003dc))",
        "Transitivity out of order"
      ],
      "line": 39,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;14"
    },
    {
      "cells": [
        "theorem",
        "((a\u003db)/\\(b\u003dc)/\\(c\u003dd) \u003d\u003d\u003e (a\u003dd))",
        "More transitivity of \u003d"
      ],
      "line": 40,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;15"
    },
    {
      "cells": [
        "theorem",
        "((a\u003db)/\\(b\u003dc)/\\(c\u003dd)/\\(d\u003de) \u003d\u003d\u003e (a\u003de))",
        "Long transitivity"
      ],
      "line": 41,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;16"
    },
    {
      "cells": [
        "theorem",
        "(a\u003dc) /\\ -(b\u003dc) \u003d\u003d\u003e -(a\u003db)",
        "flip side of transitivity"
      ],
      "line": 42,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;17"
    },
    {
      "cells": [
        "theorem",
        "(b\u003dc) /\\ -(a\u003dc) \u003d\u003d\u003e -(a\u003db)",
        "flip side of transitivity"
      ],
      "line": 43,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;18"
    },
    {
      "cells": [
        "theorem",
        "(b\u003dc) /\\ -(a\u003dc) \u003d\u003d\u003e -(b\u003da)",
        "flip side of transitivity"
      ],
      "line": 44,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;19"
    },
    {
      "comments": [
        {
          "line": 45,
          "value": "#"
        }
      ],
      "cells": [
        "non-theorem",
        "all(X, (a\u003dX))",
        "e.g., X \u003d 2 and a #\u003d 2"
      ],
      "line": 46,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;20"
    },
    {
      "cells": [
        "theorem",
        "ex(X, (a\u003dX))",
        "e.g., X \u003d a"
      ],
      "line": 47,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;21"
    },
    {
      "cells": [
        "non-theorem",
        "all(X,-(a\u003dX))",
        "e.g., X \u003d a"
      ],
      "line": 48,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;22"
    },
    {
      "cells": [
        "non-theorem",
        "all(X, (f(a)\u003df(X)))",
        "e.g., X \u003d 2 and a #\u003d 2"
      ],
      "line": 49,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;23"
    },
    {
      "cells": [
        "non-theorem",
        "all(X,-(f(a)\u003df(X)))",
        "e.g., X \u003d a"
      ],
      "line": 50,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;24"
    },
    {
      "cells": [
        "non-theorem",
        "all(X,all(Y, (Y\u003dX)))",
        "checking equality matching"
      ],
      "line": 51,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;25"
    },
    {
      "cells": [
        "non-theorem",
        "all(X,all(Y,-(Y\u003dX)))",
        "checking equality matching"
      ],
      "line": 52,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;26"
    },
    {
      "cells": [
        "non-theorem",
        "all(X,all(Y, (f(Y)\u003df(X))))",
        "checking equality matching"
      ],
      "line": 53,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;27"
    },
    {
      "cells": [
        "non-theorem",
        "all(X,all(Y,-(f(Y)\u003df(X))))",
        "checking equality matching"
      ],
      "line": 54,
      "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;28"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 105436,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13098661,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 26,
      "value": "#-----------|---------------------------------|----------------------------|"
    }
  ],
  "line": 27,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"f(a) \u003d f(a)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Function \u003d reflexivity (1.2)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "f(a) \u003d f(a)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 79590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 5081845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Function \u003d reflexivity (1.2)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 36923,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 28307,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 15091686,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"a \u003d a\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Constant \u003d reflexivity (1.2)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "a \u003d a",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 67282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 5101126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Constant \u003d reflexivity (1.2)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 41847,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 19282,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13203687,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"a \u003d a \u003d\u003d\u003d true\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Identity of \u003d, (3.3)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "a \u003d a \u003d\u003d\u003d true",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 93539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 25395682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Identity of \u003d, (3.3)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 34462,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 28307,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 12940303,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"a \u003d b \u003d\u003d\u003d b \u003d a\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Symmetry of \u003d, (1.3)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "a \u003d b \u003d\u003d\u003d b \u003d a",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 183795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 39205318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Symmetry of \u003d, (1.3)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 48410,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 26667,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 16432813,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"-(a \u003d b) \u003d\u003d\u003d -(b \u003d a)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Symmetry of \u003d, (1.3)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "-(a \u003d b) \u003d\u003d\u003d -(b \u003d a)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 141949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 72745816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Symmetry of \u003d, (1.3)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 42667,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 28718,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 16013121,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"a #\u003d b \u003d\u003d\u003d -(a \u003d b)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Def of #\u003d (3.10)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "a #\u003d b \u003d\u003d\u003d -(a \u003d b)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 76718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 55696387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Def of #\u003d (3.10)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 50461,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 22564,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 15775583,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"a #\u003d a \u003d\u003d\u003d false\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"#\u003d is nonreflexive\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "a #\u003d a \u003d\u003d\u003d false",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 77949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 30919783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#\u003d is nonreflexive",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 46359,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 28308,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13915071,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"(a #\u003d b) \u003d\u003d\u003d (b #\u003d a)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Symmetry of #\u003d, (3.16)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "(a #\u003d b) \u003d\u003d\u003d (b #\u003d a)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 60307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 46740494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Symmetry of #\u003d, (3.16)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 52513,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 28308,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13405533,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"f(a) \u003d f(b) \u003d\u003d\u003d  f(b) \u003d f(a)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Symmetry of \u003d, (1.3)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "f(a) \u003d f(b) \u003d\u003d\u003d  f(b) \u003d f(a)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 76718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 50070133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Symmetry of \u003d, (1.3)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 43897,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 29538,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13572508,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"-(f(a)\u003df(b)) \u003d\u003d\u003d -(f(b)\u003df(a))\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Symmetry of \u003d, (1.3)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "-(f(a)\u003df(b)) \u003d\u003d\u003d -(f(b)\u003df(a))",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 96410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 54159568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Symmetry of \u003d, (1.3)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 44308,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 27487,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13528200,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"f(a) #\u003d f(b) \u003d\u003d\u003d  f(b) #\u003d f(a)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Symmetry of #\u003d, (3.16)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "f(a) #\u003d f(b) \u003d\u003d\u003d  f(b) #\u003d f(a)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 89026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 50358543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Symmetry of #\u003d, (3.16)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 317949,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 27487,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 19352607,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"((a\u003db) /\\ (b\u003dc) \u003d\u003d\u003e (a\u003dc))\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Transitivity of \u003d, (1.4)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "((a\u003db) /\\ (b\u003dc) \u003d\u003d\u003e (a\u003dc))",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 73846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 37071985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transitivity of \u003d, (1.4)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 45128,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 20512,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 15060096,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"(a\u003dc) \\/ -((a\u003db) /\\ (b\u003dc))\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Transitivity out of order\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "(a\u003dc) \\/ -((a\u003db) /\\ (b\u003dc))",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 74256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 31922449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transitivity out of order",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 42256,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 23385,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13012507,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"((a\u003db)/\\(b\u003dc)/\\(c\u003dd) \u003d\u003d\u003e (a\u003dd))\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"More transitivity of \u003d\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "((a\u003db)/\\(b\u003dc)/\\(c\u003dd) \u003d\u003d\u003e (a\u003dd))",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 85744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 52830748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "More transitivity of \u003d",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 49230,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 32000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 11837123,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"((a\u003db)/\\(b\u003dc)/\\(c\u003dd)/\\(d\u003de) \u003d\u003d\u003e (a\u003de))\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"Long transitivity\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "((a\u003db)/\\(b\u003dc)/\\(c\u003dd)/\\(d\u003de) \u003d\u003d\u003e (a\u003de))",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 96000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 87608989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Long transitivity",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 50051,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 28308,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13008405,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"(a\u003dc) /\\ -(b\u003dc) \u003d\u003d\u003e -(a\u003db)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"flip side of transitivity\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "(a\u003dc) /\\ -(b\u003dc) \u003d\u003d\u003e -(a\u003db)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 78769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 33339063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "flip side of transitivity",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 40615,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 32410,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 14432404,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;18",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"(b\u003dc) /\\ -(a\u003dc) \u003d\u003d\u003e -(a\u003db)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"flip side of transitivity\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "(b\u003dc) /\\ -(a\u003dc) \u003d\u003d\u003e -(a\u003db)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 77538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 32479166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "flip side of transitivity",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 44718,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 22974,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13311994,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;19",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"(b\u003dc) /\\ -(a\u003dc) \u003d\u003d\u003e -(b\u003da)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"flip side of transitivity\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "(b\u003dc) /\\ -(a\u003dc) \u003d\u003d\u003e -(b\u003da)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 85334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 29120808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "flip side of transitivity",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 32410,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 27487,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 12335174,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 45,
      "value": "#"
    }
  ],
  "line": 46,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;20",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"all(X, (a\u003dX))\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"non-theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"e.g., X \u003d 2 and a #\u003d 2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "all(X, (a\u003dX))",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 67693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "non-theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 11867482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "e.g., X \u003d 2 and a #\u003d 2",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 38564,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 23795,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 14876712,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;21",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"ex(X, (a\u003dX))\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"e.g., X \u003d a\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "ex(X, (a\u003dX))",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 71795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 15355481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "e.g., X \u003d a",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 43487,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 36513,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 17028916,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;22",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"all(X,-(a\u003dX))\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"non-theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"e.g., X \u003d a\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "all(X,-(a\u003dX))",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 79179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "non-theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 11914662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "e.g., X \u003d a",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 41847,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 27897,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13090866,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;23",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"all(X, (f(a)\u003df(X)))\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"non-theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"e.g., X \u003d 2 and a #\u003d 2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "all(X, (f(a)\u003df(X)))",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 86565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "non-theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 14940302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "e.g., X \u003d 2 and a #\u003d 2",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 43488,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 29948,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 14513225,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;24",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"all(X,-(f(a)\u003df(X)))\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"non-theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"e.g., X \u003d a\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "all(X,-(f(a)\u003df(X)))",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 72205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "non-theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 14059481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "e.g., X \u003d a",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 44308,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 20103,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13255379,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;25",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"all(X,all(Y, (Y\u003dX)))\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"non-theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"checking equality matching\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "all(X,all(Y, (Y\u003dX)))",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 69334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "non-theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 22525530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "checking equality matching",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 48410,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 24615,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 14585020,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;26",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"all(X,all(Y,-(Y\u003dX)))\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"non-theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"checking equality matching\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "all(X,all(Y,-(Y\u003dX)))",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 98051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "non-theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 26768400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "checking equality matching",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 38565,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 30359,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13722251,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;27",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"all(X,all(Y, (f(Y)\u003df(X))))\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"non-theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"checking equality matching\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "all(X,all(Y, (f(Y)\u003df(X))))",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 69743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "non-theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 37762036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "checking equality matching",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 35282,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 35282,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 15686148,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Simple Examples",
  "description": "",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);simple-examples;;28",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the FOP is \"all(X,all(Y,-(f(Y)\u003df(X))))\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it is a \"non-theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Note that \"checking equality matching\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "all(X,all(Y,-(f(Y)\u003df(X))))",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 68923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "non-theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 25700912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "checking equality matching",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 34872,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 21333,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13989327,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Transitive chain on each side of an inequality",
  "description": "\nThese formulas require the prover to store a lot of transitive chain\ninformation for later use. The second formula causes the prover to reach its\ndepth limit.",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);transitive-chain-on-each-side-of-an-inequality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 62,
  "name": "Formula \"(a\u003db) /\\ (b\u003dc) /\\ (c#\u003dd ) /\\ (d\u003de) /\\ (e\u003df)  \u003d\u003d\u003e (f#\u003da)\" is a theorem",
  "keyword": "* "
});
formatter.step({
  "line": 64,
  "name": "Formula \"(a\u003db) /\\ (b\u003dc) /\\ (c#\u003dd) /\\ (d\u003de) /\\ (e\u003df)  \u003d\u003d\u003e (f\u003da)\" is not a theorem",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "(a\u003db) /\\ (b\u003dc) /\\ (c#\u003dd ) /\\ (d\u003de) /\\ (e\u003df)  \u003d\u003d\u003e (f#\u003da)",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 171884237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(a\u003db) /\\ (b\u003dc) /\\ (c#\u003dd) /\\ (d\u003de) /\\ (e\u003df)  \u003d\u003d\u003e (f\u003da)",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_not_a_theorem(String)"
});
formatter.result({
  "duration": 218700629,
  "status": "passed"
});
formatter.background({
  "line": 12,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 22974,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13331276,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Alternative equalities matching two different transitive chains",
  "description": "\nThis test ensures that the prover doesn\u0027t get confused by reusing a transitive\nchain.",
  "id": "equality-of-objects-----(tests-for-the-eleantap-system);alternative-equalities-matching-two-different-transitive-chains",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 72,
  "name": "Formula \"(a\u003db) \u003d\u003d\u003e ( ((b\u003dc) \u003d\u003d\u003e (a\u003dc)) /\\ ((b\u003dd) \u003d\u003d\u003e (a\u003dd)) )\" is a theorem",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "(a\u003db) \u003d\u003d\u003e ( ((b\u003dc) \u003d\u003d\u003e (a\u003dc)) /\\ ((b\u003dd) \u003d\u003d\u003e (a\u003dd)) )",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 70428689,
  "status": "passed"
});
formatter.uri("pl1ha_eTLeanTaP_predicate-calculus.feature");
formatter.feature({
  "line": 1,
  "name": "Predicate Calculus     (Tests for the eLeanTaP system)",
  "description": "  Copyright and license information at bottom of file.\n\n  This file contains the tests for the axioms and theorems of the predicate \n  calculus. We rely on (Gries\u0026Schneider, 1993) in testing a complete set of \n  theorems.\n\n  The quantifiers are represented as functions \"all\" and \"ex\" taking either \n  two or three arguments. The three-argument versions take a parameter for \n    (1) variable name\n    (2) a range predicate\n    (3) the expression for the body, to which the quantification operator is \n        applied when the range predicate is true. \n  The three-argument statement \n     all(X, range-of-X, body) \n  is read as \"for all X such that \u003crange-of-X\u003e, then \u003cbody\u003e\". For example, \n     all(X, X \u003c 0, 2*X \u003c X).\n\n  And \n    ex (X, range-of-X, body) \n  is read as \"there exists an X such that \u003crange-of-X\u003e and \u003cbody\u003e\". For \n  example, \n    ex(X, even(X), squareOf(2) \u003d X).\n  \n  The two-argument versions are\n    all(X,body), meaning all(X,true, body)\n    ex (X,body), meaning  ex(X,true, body)\n\n  The range, if it is present, is intended to simplify the body by \n  providing a place to limit the values that are used by the \n  quantified variable.\n\n  The three-argument versions, with ranges, may be translated into the two-\n  argument versions in the following way.\n    all(X,range,body) \u003d\u003d\u003d all(X,range \u003d\u003d\u003e body)\n    ex (X,range,body) \u003d\u003d\u003d  ex(X,range /\\  body)\n\n  Some information on the prover and its language is in the feature file\n  pl1aa_eLeanTap_eqivalence_truth.feature.",
  "id": "predicate-calculus-----(tests-for-the-eleantap-system)",
  "keyword": "Feature"
});
formatter.background({
  "line": 42,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 43,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 25436,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 11963072,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 45,
      "value": "#  And Java debugging"
    },
    {
      "line": 46,
      "value": "#  And using feature \"pl1ha_eTLeanTaP_predicate-calculus\""
    }
  ],
  "line": 48,
  "name": "Simple example of a non-theorem",
  "description": "",
  "id": "predicate-calculus-----(tests-for-the-eleantap-system);simple-example-of-a-non-theorem",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "the FOP is \"all(Y, all(X, p(Y) \u003d\u003d\u003e p(X) ))\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "it is not a theorem",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "all(Y, all(X, p(Y) \u003d\u003d\u003e p(X) ))",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 60308,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.it_is_not_a_theorem()"
});
formatter.result({
  "duration": 42217008,
  "status": "passed"
});
formatter.background({
  "line": 42,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 43,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 23794,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 11601226,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Quantified variables may be given new names",
  "description": "\n  The all and ex statements bind variables locally, and the names used for \n  these variables may be chosen arbitrarily, as long as the name has not \n  already been used in the expression.",
  "id": "predicate-calculus-----(tests-for-the-eleantap-system);quantified-variables-may-be-given-new-names",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 59,
  "name": "Formula \"all(X, p(X)) \u003d\u003d\u003d all(Y, p(Y))\" is a theorem",
  "keyword": "* "
});
formatter.step({
  "line": 60,
  "name": "Formula \" ex(X, p(X)) \u003d\u003d\u003d  ex(Y, p(Y))\" is a theorem",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "all(X, p(X)) \u003d\u003d\u003d all(Y, p(Y))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 76582943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " ex(X, p(X)) \u003d\u003d\u003d  ex(Y, p(Y))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 62108693,
  "status": "passed"
});
formatter.background({
  "line": 42,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 43,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 32820,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 14591584,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Universal quantified variables may be instantiated to any constant",
  "description": "",
  "id": "predicate-calculus-----(tests-for-the-eleantap-system);universal-quantified-variables-may-be-instantiated-to-any-constant",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 65,
  "name": "the FOP is \"all(X, p(X)) \u003d\u003d\u003e p(a) \"",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "it is a theorem",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "Formula \"all(X,p(X)) \u003d\u003d\u003e p(a) /\\ p(b) /\\ p(c)\" is a theorem",
  "keyword": "* "
});
formatter.step({
  "line": 70,
  "name": "Formula \"(p(a) /\\ p(b) /\\ p(c)) \\/ -all(X,p(X))\" is a theorem",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "all(X, p(X)) \u003d\u003d\u003e p(a) ",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 89846,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.it_is_a_theorem()"
});
formatter.result({
  "duration": 33374755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all(X,p(X)) \u003d\u003d\u003e p(a) /\\ p(b) /\\ p(c)",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 53161414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(p(a) /\\ p(b) /\\ p(c)) \\/ -all(X,p(X))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 51496184,
  "status": "passed"
});
formatter.background({
  "line": 42,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 43,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 93128,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13785020,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 71,
      "value": "# same as above only all() is in last place"
    }
  ],
  "line": 73,
  "name": "Additional unnamed items do not necessarily exist",
  "description": "\n  Items must be mentioned in order for us to depend upon their existance. For \n  instance, the theory of natural numbers specifically states that zero exists \n  and then sets up the machinery that specifies the existence of any other \n  natural number. But in general we cannot assume that things exist. So if we \n  have an object, we cannot prove that there is some different object unless \n  we specify it.",
  "id": "predicate-calculus-----(tests-for-the-eleantap-system);additional-unnamed-items-do-not-necessarily-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 82,
  "name": "Formula \"ex(X,(a#\u003dX))\" is not a theorem",
  "keyword": "* "
});
formatter.step({
  "line": 84,
  "name": "formula \"ex(X,(a\u003dX))\" is a theorem",
  "keyword": "But "
});
formatter.step({
  "line": 87,
  "name": "formula \"-ex(X,(a#\u003dX))\" is not a theorem",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "formula \"ex(Y,a#\u003dY) \u003d\u003d\u003e ex(X,(a#\u003dX))\" is a theorem",
  "keyword": "But "
});
formatter.step({
  "line": 92,
  "name": "formula \"-(a \u003d b) \u003d\u003d\u003e ex(X,-(a\u003dX))\" is a theorem",
  "keyword": "But "
});
formatter.step({
  "line": 95,
  "name": "formula \"-(a \u003d b) \u003d\u003d\u003e ex(X,-(a\u003dX))\" is a theorem",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "formula \"(a\u003db) \u003d\u003d\u003e ex(X, (a\u003dX))\" is a theorem",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "Note",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 99,
    "value": "This last formula can perhaps be understood as claiming that two different \nobjects exist which are equal, but another interpretation is that there are \ntwo different names for the same object."
  }
});
formatter.match({
  "arguments": [
    {
      "val": "ex(X,(a#\u003dX))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_not_a_theorem(String)"
});
formatter.result({
  "duration": 14511173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ex(X,(a\u003dX))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 16038558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-ex(X,(a#\u003dX))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_not_a_theorem(String)"
});
formatter.result({
  "duration": 12188713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ex(Y,a#\u003dY) \u003d\u003d\u003e ex(X,(a#\u003dX))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 36078344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-(a \u003d b) \u003d\u003d\u003e ex(X,-(a\u003dX))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 26246964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-(a \u003d b) \u003d\u003d\u003e ex(X,-(a\u003dX))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 29462963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(a\u003db) \u003d\u003d\u003e ex(X, (a\u003dX))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 26908706,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.notes(String)"
});
formatter.result({
  "duration": 370461,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 106,
      "value": "#Scenario: We can only quantify objects, not logical statements"
    },
    {
      "line": 107,
      "value": "#"
    },
    {
      "line": 108,
      "value": "#    Um, apparantly we can do some second-order logic, but please don\u0027t -- the"
    },
    {
      "line": 109,
      "value": "#    system is not tested for that."
    },
    {
      "line": 110,
      "value": "#"
    },
    {
      "line": 111,
      "value": "#    In first order logic, operators like \u003d\u003d\u003e (implies), - (not), and \\/ (or) may"
    },
    {
      "line": 112,
      "value": "#    only be used with logical statements and not with objects. The first,"
    },
    {
      "line": 113,
      "value": "#    meaningless, formula is to be read as \"for all statements X and Y"
    },
    {
      "line": 114,
      "value": "#    such that statement X implies statement Y, statement X is false or"
    },
    {
      "line": 115,
      "value": "#    statement Y is true\"."
    },
    {
      "line": 116,
      "value": "#"
    },
    {
      "line": 117,
      "value": "#  * Formula \"all(X,all(Y,X \u003d\u003d\u003e Y,-X \\/ Y))\" is not a theorem"
    }
  ],
  "line": 120,
  "name": "Simple Examples",
  "description": "",
  "id": "predicate-calculus-----(tests-for-the-eleantap-system);simple-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 122,
  "name": "the FOP is \"\u003cStatement\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "it is a \"\u003cResult\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "Note that \"\u003cNote\u003e\"",
  "keyword": "* "
});
formatter.examples({
  "comments": [
    {
      "line": 126,
      "value": "# In the following tables, parenthetic numbers are a reference to the the"
    },
    {
      "line": 127,
      "value": "# theorems collected in the final pages of David Gries \u0026 Fred B. Schneider, A"
    },
    {
      "line": 128,
      "value": "# Logical Approach to Discrete Math, 1993. For instance, (3.8) refers to their"
    },
    {
      "line": 129,
      "value": "# Axiom, \"Definition of false\"."
    }
  ],
  "line": 131,
  "name": "",
  "description": "",
  "id": "predicate-calculus-----(tests-for-the-eleantap-system);simple-examples;",
  "rows": [
    {
      "cells": [
        "Result",
        "Statement",
        "Note"
      ],
      "line": 132,
      "id": "predicate-calculus-----(tests-for-the-eleantap-system);simple-examples;;1"
    },
    {
      "cells": [
        "theorem",
        "all(X,false, p) \u003d\u003d\u003d true",
        "Empty Range (8.13)"
      ],
      "line": 133,
      "id": "predicate-calculus-----(tests-for-the-eleantap-system);simple-examples;;2"
    },
    {
      "cells": [
        "theorem",
        "ex(X,false, p) \u003d\u003d\u003d false",
        "Empty Range (8.13)"
      ],
      "line": 134,
      "id": "predicate-calculus-----(tests-for-the-eleantap-system);simple-examples;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 42,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 43,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 21744,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 14306046,
  "status": "passed"
});
formatter.scenario({
  "line": 133,
  "name": "Simple Examples",
  "description": "",
  "id": "predicate-calculus-----(tests-for-the-eleantap-system);simple-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 122,
  "name": "the FOP is \"all(X,false, p) \u003d\u003d\u003d true\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "Note that \"Empty Range (8.13)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "all(X,false, p) \u003d\u003d\u003d true",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 83282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 35136396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Empty Range (8.13)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 43077,
  "status": "passed"
});
formatter.background({
  "line": 42,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 43,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 35282,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 12505430,
  "status": "passed"
});
formatter.scenario({
  "line": 134,
  "name": "Simple Examples",
  "description": "",
  "id": "predicate-calculus-----(tests-for-the-eleantap-system);simple-examples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 122,
  "name": "the FOP is \"ex(X,false, p) \u003d\u003d\u003d false\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "Note that \"Empty Range (8.13)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "ex(X,false, p) \u003d\u003d\u003d false",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 69333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 36440190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Empty Range (8.13)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 144000,
  "status": "passed"
});
formatter.background({
  "line": 42,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 43,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 38974,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 12598969,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 136,
      "value": "# TODO: enter tests for the rest of the G\u0026S predicate calculus theorems"
    }
  ],
  "line": 138,
  "name": "A difficult example for some provers",
  "description": "\nA Smullyan tree proof has difficulty with for-all-statements because they are \nreinstantiated over and over using the rule Universal Instantiation, \ngenerating an infinite tree. Our prover has no trouble with this because \ninstead of instantiating for-all statements, we rewrite them using logic \nvariables and then avoid rewriting the same for-all-statement until that logic \nvariable matches something. We can\u0027t possibly find a unique use for a second \nunmatched instantiation of a statement until we have found a match for the \nfirst instantiation.\n\nThe first example is taken from Zegarelli (2007, p.295-297). The second \nexample is from Smullyan (1971, p.63). The idea is that the axioms for \nless-than in the natural numbers are known to be consistent; therefore, we \nshould not be able to prove them false. Smullyan\u0027s example requires that we \nadd the fact that every natural number has a successor and a definition for \nless-than or it runs into the problem of trying to claim something about an \nobject which has no support for even existing.\n\nI am not yet able to prove that our trick is able to either prove or \ninvalidate every formula, but it definitely reduces the number of problem \nformulas.\n\nIf a statement is neither valid nor inconsistent, it is incomplete, in the \nsense that some other statements could be made which force it to be either \none.",
  "id": "predicate-calculus-----(tests-for-the-eleantap-system);a-difficult-example-for-some-provers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 165,
  "name": "Debugging on",
  "keyword": "* "
});
formatter.step({
  "line": 166,
  "name": "Using feature \"pl1ha_eTLeanTaP_predicate-calculus - A difficult example for some provers\"",
  "keyword": "* "
});
formatter.step({
  "line": 168,
  "name": "The conjunction of these formulas is underspecified",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 169,
    "value": "all(X1,ex(Y1,lt(X1,Y1)))\n-ex(X2,lt(X2,X2))\nall(X3, all(Y3, all(Z3, (lt(X3,Y3) /\\ lt(Y3,Z3)) \u003d\u003d\u003e lt(X3,Z3) )))"
  }
});
formatter.step({
  "line": 174,
  "name": "The conjunction of these formulas is underspecified",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 175,
    "value": "all(X1,ex(Y1,lt(X1,Y1)))\n-ex(X2,lt(X2,X2))"
  }
});
formatter.step({
  "line": 179,
  "name": "Formula \"all(X,ex(Y,lt(X,Y)))\" is underspecified",
  "keyword": "* "
});
formatter.step({
  "line": 181,
  "name": "Formula \"-ex(X,lt(X,X))\" is underspecified",
  "keyword": "* "
});
formatter.step({
  "line": 183,
  "name": "Formula \"all(X, all(Y, all(Z, (lt(X,Y) /\\ lt(Y,Z)) \u003d\u003d\u003e lt(X,Z) )))\" is underspecified",
  "keyword": "* "
});
formatter.step({
  "line": 185,
  "name": "Formula \"-lt(inf,Y)\" is not a theorem",
  "keyword": "* "
});
formatter.step({
  "line": 187,
  "name": "Formula \"lt(argh,argh)\" is not a theorem",
  "keyword": "* "
});
formatter.step({
  "line": 189,
  "name": "Formula \"lt(a,b) /\\ lt(b,c) /\\ -lt(a,c)\" is not a theorem",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 192,
      "value": "#  * The disjunction of these formulas is underspecified"
    },
    {
      "line": 193,
      "value": "#      \"\"\""
    },
    {
      "line": 194,
      "value": "#      -lt(inf,Y)"
    },
    {
      "line": 195,
      "value": "#      lt(argh,argh)"
    },
    {
      "line": 196,
      "value": "#      (lt(a,b) /\\ lt(b,c) /\\ -lt(a,c) )"
    },
    {
      "line": 197,
      "value": "#      \"\"\""
    }
  ],
  "line": 199,
  "name": "Debugging off",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.debugging_on()"
});
formatter.result({
  "duration": 34051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pl1ha_eTLeanTaP_predicate-calculus - A difficult example for some provers",
      "offset": 15
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.using_feature(String)"
});
formatter.result({
  "duration": 112820,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_conjunction_of_these_formulas_is_underspecified(String)"
});
formatter.result({
  "duration": 1418699726,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_conjunction_of_these_formulas_is_underspecified(String)"
});
formatter.result({
  "duration": 246649745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all(X,ex(Y,lt(X,Y)))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_underspecified(String)"
});
formatter.result({
  "duration": 83586017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-ex(X,lt(X,X))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_underspecified(String)"
});
formatter.result({
  "duration": 59499462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all(X, all(Y, all(Z, (lt(X,Y) /\\ lt(Y,Z)) \u003d\u003d\u003e lt(X,Z) )))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_underspecified(String)"
});
formatter.result({
  "duration": 1866289285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-lt(inf,Y)",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_not_a_theorem(String)"
});
formatter.result({
  "duration": 37963061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lt(argh,argh)",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_not_a_theorem(String)"
});
formatter.result({
  "duration": 31950757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lt(a,b) /\\ lt(b,c) /\\ -lt(a,c)",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_not_a_theorem(String)"
});
formatter.result({
  "duration": 124438103,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.debugging_off()"
});
formatter.result({
  "duration": 37743,
  "status": "passed"
});
formatter.uri("pl1ia_eTLeanTaP_predicates_and_functions.feature");
formatter.feature({
  "line": 1,
  "name": "Predicates and functions     (Tests for the eLeanTaP system)",
  "description": "  Copyright and license information at bottom of file.\n\n  Here we provide tests that logic works with precicates and equality works \n  with functions. We normally represent a predicate as p(x) or q(x) and a \n  function as f(x) or g(x).\n\n  One important result covered here is that Boolean functions must never be \n  treated as predicates. That is, instead of saying that the boolean result of \n  function f(y) holds, we must state that it is equal to true. For instance,\n    not  p(y) /\\ f(x)\n    but  p(y) /\\ f(x)\u003dtrue\n  \n  More information on the prover and its language is in the feature file\n      \n    pl1aa_eLeanTap_eqivalence_truth.feature",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system)",
  "keyword": "Feature"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 36923,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 16562865,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 22,
      "value": "#  And Java debugging"
    },
    {
      "line": 23,
      "value": "#  And using feature \"pl1ia_eTLeanTaP_predicates_and_functions\""
    }
  ],
  "line": 25,
  "name": "Simple examples of non-theorems",
  "description": "\n  These statements have no support, that is, they depend upon facts that are\n  not stated. Therefore they cannot be proven.",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples-of-non-theorems",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "Formula \"p(a,b,c) \u003d\u003d\u003e q(a,b,c)\" is not a theorem",
  "keyword": "* "
});
formatter.step({
  "line": 32,
  "name": "Formula \"p(a,f(b,c)) \u003d\u003d\u003e p(a,g(b,c))\" is not a theorem",
  "keyword": "* "
});
formatter.step({
  "line": 34,
  "name": "Formula \"f(a,b,c) \u003d g(a,b,c)\" is not a theorem",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p(a,b,c) \u003d\u003d\u003e q(a,b,c)",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_not_a_theorem(String)"
});
formatter.result({
  "duration": 20831581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "p(a,f(b,c)) \u003d\u003d\u003e p(a,g(b,c))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_not_a_theorem(String)"
});
formatter.result({
  "duration": 28327373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "f(a,b,c) \u003d g(a,b,c)",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_not_a_theorem(String)"
});
formatter.result({
  "duration": 9133535,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "Simple Examples",
  "description": "",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "the FOP is \"\u003cStatement\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is a \"\u003cResult\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Note that \"\u003cNote\u003e\"",
  "keyword": "* "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;",
  "rows": [
    {
      "cells": [
        "Result",
        "Statement",
        "Note"
      ],
      "line": 44,
      "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;1"
    },
    {
      "comments": [
        {
          "line": 45,
          "value": "#-----------|---------------------------------|----------------------------|"
        }
      ],
      "cells": [
        "theorem",
        "f(a,b) \u003d f(a,b)",
        "Arg equality is reflexive"
      ],
      "line": 46,
      "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;2"
    },
    {
      "cells": [
        "non-theorem",
        "p(a)   \u003d   p(b)",
        "Arguments are not arbitrary"
      ],
      "line": 47,
      "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;3"
    },
    {
      "cells": [
        "theorem",
        "a \u003d b \u003d\u003d\u003e f(a) \u003d f(b)",
        "Leibnitz in functions (1.8)"
      ],
      "line": 48,
      "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;4"
    },
    {
      "cells": [
        "theorem",
        "b \u003d a \u003d\u003d\u003e f(a) \u003d f(b)",
        "and using symmetry"
      ],
      "line": 49,
      "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;5"
    },
    {
      "cells": [
        "theorem",
        "-(f(a) \u003d f(b)) \u003d\u003d\u003e -(b \u003d a)",
        "modis tolens version"
      ],
      "line": 50,
      "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;6"
    },
    {
      "cells": [
        "non-theorem",
        "f(a) \u003d f(b) \u003d\u003d\u003e a\u003db",
        "e.g., -(a\u003db)/\\all(X,f(X)\u003dc)"
      ],
      "line": 51,
      "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;7"
    },
    {
      "cells": [
        "theorem",
        "( p(b) /\\ a \u003d b ) \u003d\u003d\u003e p(a)",
        "Substitution of arguments"
      ],
      "line": 52,
      "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;8"
    },
    {
      "cells": [
        "theorem",
        "(p(b) \u003d\u003d\u003d p(a))/\\p(b) \u003d\u003d\u003e p(a)",
        "Equiv Predicate substitution"
      ],
      "line": 53,
      "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;9"
    },
    {
      "comments": [
        {
          "line": 54,
          "value": "#"
        }
      ],
      "cells": [
        "theorem",
        "(p(a,b) \u003d\u003d\u003d  p(b,a)) /\\ p(a,b) \u003d\u003d\u003e p(b,a)",
        "match with args"
      ],
      "line": 55,
      "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;10"
    },
    {
      "cells": [
        "theorem",
        "all(X,all(Y,p(X,Y) \u003d\u003d\u003d  p(Y,X) )) /\\ p(a,b) \u003d\u003d\u003e p(b,a)",
        "gnzd"
      ],
      "line": 56,
      "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;11"
    },
    {
      "comments": [
        {
          "line": 57,
          "value": "#"
        }
      ],
      "cells": [
        "theorem",
        "(f(a,b) \u003d f(b,a)) /\\ p(f(a,b)) \u003d\u003d\u003e p(f(b,a))",
        "match in fns"
      ],
      "line": 58,
      "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;12"
    },
    {
      "cells": [
        "theorem",
        "all(X,all(Y,f(X,Y) \u003d f(Y,X) )) /\\ p(f(a,b)) \u003d\u003d\u003e p(f(b,a))",
        "gnz"
      ],
      "line": 59,
      "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;13"
    },
    {
      "comments": [
        {
          "line": 60,
          "value": "#"
        }
      ],
      "cells": [
        "theorem",
        "(a \u003d b) /\\ p(c,f(a)) \u003d\u003d\u003e p(c,f(b))",
        "Deep arguments"
      ],
      "line": 61,
      "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;14"
    },
    {
      "cells": [
        "theorem",
        "(a \u003d c) /\\ f(a,b) \u003d g(a,d) \u003d\u003d\u003e f(a,b) \u003d g(c,d)",
        "Fns in equality"
      ],
      "line": 62,
      "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;15"
    },
    {
      "comments": [
        {
          "line": 63,
          "value": "#"
        }
      ],
      "cells": [
        "theorem",
        "(f(a,b)\u003dg(b,a))/\\p(g(b,a)) \u003d\u003d\u003e p(f(a,b))",
        "different fns in pred"
      ],
      "line": 64,
      "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;16"
    },
    {
      "cells": [
        "theorem",
        "-p(a) \\/ p(b) \\/ -(a\u003db)",
        "inequality implies arg ineq"
      ],
      "line": 65,
      "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;17"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 24616,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 19167992,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 45,
      "value": "#-----------|---------------------------------|----------------------------|"
    }
  ],
  "line": 46,
  "name": "Simple Examples",
  "description": "",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "the FOP is \"f(a,b) \u003d f(a,b)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Note that \"Arg equality is reflexive\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "f(a,b) \u003d f(a,b)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 350359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 8234663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Arg equality is reflexive",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 35282,
  "status": "passed"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 23384,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 23487991,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Simple Examples",
  "description": "",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "the FOP is \"p(a)   \u003d   p(b)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is a \"non-theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Note that \"Arguments are not arbitrary\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "p(a)   \u003d   p(b)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 79180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "non-theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 7178254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Arguments are not arbitrary",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 36923,
  "status": "passed"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 25846,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 20770043,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Simple Examples",
  "description": "",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "the FOP is \"a \u003d b \u003d\u003d\u003e f(a) \u003d f(b)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Note that \"Leibnitz in functions (1.8)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "a \u003d b \u003d\u003d\u003e f(a) \u003d f(b)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 75077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 25968810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leibnitz in functions (1.8)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 35692,
  "status": "passed"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 20923,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 20196094,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Simple Examples",
  "description": "",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "the FOP is \"b \u003d a \u003d\u003d\u003e f(a) \u003d f(b)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Note that \"and using symmetry\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "b \u003d a \u003d\u003d\u003e f(a) \u003d f(b)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 78359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 24622759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "and using symmetry",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 45949,
  "status": "passed"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 28718,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 19534761,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Simple Examples",
  "description": "",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "the FOP is \"-(f(a) \u003d f(b)) \u003d\u003d\u003e -(b \u003d a)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Note that \"modis tolens version\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "-(f(a) \u003d f(b)) \u003d\u003d\u003e -(b \u003d a)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 84923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 29178655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "modis tolens version",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 43487,
  "status": "passed"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 25026,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 17839993,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Simple Examples",
  "description": "",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "the FOP is \"f(a) \u003d f(b) \u003d\u003d\u003e a\u003db\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is a \"non-theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Note that \"e.g., -(a\u003db)/\\all(X,f(X)\u003dc)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "f(a) \u003d f(b) \u003d\u003d\u003e a\u003db",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 73436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "non-theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 24220298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "e.g., -(a\u003db)/\\all(X,f(X)\u003dc)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 42256,
  "status": "passed"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 21333,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 23901118,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Simple Examples",
  "description": "",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "the FOP is \"( p(b) /\\ a \u003d b ) \u003d\u003d\u003e p(a)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Note that \"Substitution of arguments\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "( p(b) /\\ a \u003d b ) \u003d\u003d\u003e p(a)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 99282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 58790950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Substitution of arguments",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 61948,
  "status": "passed"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 40616,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 24345426,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Simple Examples",
  "description": "",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "the FOP is \"(p(b) \u003d\u003d\u003d p(a))/\\p(b) \u003d\u003d\u003e p(a)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Note that \"Equiv Predicate substitution\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "(p(b) \u003d\u003d\u003d p(a))/\\p(b) \u003d\u003d\u003e p(a)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 79590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 82396684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Equiv Predicate substitution",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 49231,
  "status": "passed"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 27898,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 15972096,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 54,
      "value": "#"
    }
  ],
  "line": 55,
  "name": "Simple Examples",
  "description": "",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "the FOP is \"(p(a,b) \u003d\u003d\u003d  p(b,a)) /\\ p(a,b) \u003d\u003d\u003e p(b,a)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Note that \"match with args\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "(p(a,b) \u003d\u003d\u003d  p(b,a)) /\\ p(a,b) \u003d\u003d\u003e p(b,a)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 78358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 71619252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "match with args",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 50871,
  "status": "passed"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 21743,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 14460712,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Simple Examples",
  "description": "",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "the FOP is \"all(X,all(Y,p(X,Y) \u003d\u003d\u003d  p(Y,X) )) /\\ p(a,b) \u003d\u003d\u003e p(b,a)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Note that \"gnzd\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "all(X,all(Y,p(X,Y) \u003d\u003d\u003d  p(Y,X) )) /\\ p(a,b) \u003d\u003d\u003e p(b,a)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 90666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 99738625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gnzd",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 80000,
  "status": "passed"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 98872,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 16691275,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 57,
      "value": "#"
    }
  ],
  "line": 58,
  "name": "Simple Examples",
  "description": "",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "the FOP is \"(f(a,b) \u003d f(b,a)) /\\ p(f(a,b)) \u003d\u003d\u003e p(f(b,a))\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Note that \"match in fns\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "(f(a,b) \u003d f(b,a)) /\\ p(f(a,b)) \u003d\u003d\u003e p(f(b,a))",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 60307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 42126342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "match in fns",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 49230,
  "status": "passed"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 57846,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 15905634,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Simple Examples",
  "description": "",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "the FOP is \"all(X,all(Y,f(X,Y) \u003d f(Y,X) )) /\\ p(f(a,b)) \u003d\u003d\u003e p(f(b,a))\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Note that \"gnz\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "all(X,all(Y,f(X,Y) \u003d f(Y,X) )) /\\ p(f(a,b)) \u003d\u003d\u003e p(f(b,a))",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 63589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 57494540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gnz",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 38154,
  "status": "passed"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 20102,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13347687,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 60,
      "value": "#"
    }
  ],
  "line": 61,
  "name": "Simple Examples",
  "description": "",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "the FOP is \"(a \u003d b) /\\ p(c,f(a)) \u003d\u003d\u003e p(c,f(b))\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Note that \"Deep arguments\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "(a \u003d b) /\\ p(c,f(a)) \u003d\u003d\u003e p(c,f(b))",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 84103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 32628090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deep arguments",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 39795,
  "status": "passed"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 25847,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 12435688,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Simple Examples",
  "description": "",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "the FOP is \"(a \u003d c) /\\ f(a,b) \u003d g(a,d) \u003d\u003d\u003e f(a,b) \u003d g(c,d)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Note that \"Fns in equality\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "(a \u003d c) /\\ f(a,b) \u003d g(a,d) \u003d\u003d\u003e f(a,b) \u003d g(c,d)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 75487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 37440395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fns in equality",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 45539,
  "status": "passed"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 43077,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 16416404,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 63,
      "value": "#"
    }
  ],
  "line": 64,
  "name": "Simple Examples",
  "description": "",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "the FOP is \"(f(a,b)\u003dg(b,a))/\\p(g(b,a)) \u003d\u003d\u003e p(f(a,b))\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Note that \"different fns in pred\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "(f(a,b)\u003dg(b,a))/\\p(g(b,a)) \u003d\u003d\u003e p(f(a,b))",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 113641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 30197732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "different fns in pred",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 46359,
  "status": "passed"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 34461,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 11771482,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Simple Examples",
  "description": "",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-examples;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "the FOP is \"-p(a) \\/ p(b) \\/ -(a\u003db)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Note that \"inequality implies arg ineq\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "-p(a) \\/ p(b) \\/ -(a\u003db)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 68923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 28143989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inequality implies arg ineq",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 49230,
  "status": "passed"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 22974,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 16129224,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Simple a \u003d\u003d\u003e a with distractions to exercise the prover",
  "description": "",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);simple-a-\u003d\u003d\u003e-a-with-distractions-to-exercise-the-prover",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 70,
  "name": "Formula \"-p(a) /\\ p(f(a,b)) /\\ (f(a,b)\u003dg(b,a))/\\p(g(c,a)) \u003d\u003d\u003e p(f(a,b))\" is a theorem",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "-p(a) /\\ p(f(a,b)) /\\ (f(a,b)\u003dg(b,a))/\\p(g(c,a)) \u003d\u003d\u003e p(f(a,b))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 69030535,
  "status": "passed"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 23385,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13737841,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Generalized use of functions in equalities",
  "description": "",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);generalized-use-of-functions-in-equalities",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 75,
  "name": "Formula \"(a \u003d b) /\\ all(X,p(X,f(a))) \u003d\u003d\u003e p(c,f(b))\" is a theorem",
  "keyword": "* "
});
formatter.step({
  "line": 77,
  "name": "Formula \"(a \u003d c) /\\ all(X,f(X,b) \u003d g(X,d)) \u003d\u003d\u003e (f(a,b) \u003d g(c,d))\" is a theorem",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "(a \u003d b) /\\ all(X,p(X,f(a))) \u003d\u003d\u003e p(c,f(b))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 37492908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(a \u003d c) /\\ all(X,f(X,b) \u003d g(X,d)) \u003d\u003d\u003e (f(a,b) \u003d g(c,d))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 49129416,
  "status": "passed"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 50461,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 11440816,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Order of argument use is not important to the prover",
  "description": "\nThe prover implements this with a feature called \"guarded expressions\". This\ntest ensures that guarded expressions work reguardless of order.",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);order-of-argument-use-is-not-important-to-the-prover",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 85,
  "name": "Formula \"(f(a) \u003d f(d)) \\/ -((a\u003db) /\\ (b\u003dc) /\\ (c\u003dd))\" is a theorem",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "(f(a) \u003d f(d)) \\/ -((a\u003db) /\\ (b\u003dc) /\\ (c\u003dd))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 55982336,
  "status": "passed"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 29538,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 13458045,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "Ensure disjunction with argument testing and other works",
  "description": "\nThe prover was discarding the information that it needed to prove a \ndisjunction when statements involving arguments were involved.",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);ensure-disjunction-with-argument-testing-and-other-works",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 93,
  "name": "Formula \"(f(a)\u003df(b)) /\\ -(f(b)\u003df(c)) \u003d\u003d\u003e -(b\u003dc) /\\ -(f(a)\u003df(c))\" is a theorem",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 94,
      "value": "#  * Formula \"-(f(b)\u003df(c)) /\\ (f(a)\u003df(b)) \u003d\u003d\u003e -(a\u003dc) /\\ -(f(a)\u003df(c))\" is a theorem"
    },
    {
      "line": 95,
      "value": "#  * Formula \"-(f(a)\u003df(b)) /\\ (f(b)\u003df(c)) \u003d\u003d\u003e -(a\u003db) /\\ -(f(a)\u003df(c))\" is a theorem"
    }
  ],
  "line": 97,
  "name": "Formula \"-p(b) /\\ p(a) \u003d\u003d\u003e -(a\u003db) /\\ p(a)\" is a theorem",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "(f(a)\u003df(b)) /\\ -(f(b)\u003df(c)) \u003d\u003d\u003e -(b\u003dc) /\\ -(f(a)\u003df(c))",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 65244691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-p(b) /\\ p(a) \u003d\u003d\u003e -(a\u003db) /\\ p(a)",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 50056184,
  "status": "passed"
});
formatter.background({
  "line": 19,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 20,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 26667,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 14232609,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 98,
      "value": "#  * Formula \"p(b) /\\ -p(a) \u003d\u003d\u003e -(a\u003db) /\\ -p(a)\" is a theorem"
    }
  ],
  "line": 101,
  "name": "Special treatment for booleans as a predicate and in (in-)equalities",
  "description": "\nWe wish we could use boolean variables with equality (\u003d) as well as using them\nas predicates, for instance with implication, \u003d\u003d\u003e, but our implementation does\nnot allow this. A single additional requirement would be needed to state what \nis desired:\n\n  p \u003d\u003d\u003d q  \u003d\u003d\u003d  (p\u003dq) \n\nHowever, the programming difficulties of treating booleans as both predicates \nand boolean variables that can be compared require us to take a different \ntack: one options is to transform all predicates into boolean comparisons by\nequating them with true. For instance, our required statement becomes\n\n  (p\u003dtrue) \u003d\u003d\u003d (q\u003dtrue)  \u003d\u003d\u003d  (p\u003dq) \n\nIn addition, we must add the facts that make a p and q be boolean variables, \nthat is, they are each either true or false. Even though we can get away with \nleaving these boolean facts off in certain similar looking cases because of \nthe way equalities are implemented, we usually end up with statements looking \nlike\n\n  ((p\u003dtrue)\\/(p\u003dfalse)) /\\ ((q\u003dtrue)\\/(q\u003dfalse)) \n  \u003d\u003d\u003e \n  ( (p\u003dtrue) \u003d\u003d\u003d (p\u003dq) \u003d\u003d\u003d (q\u003dtrue) )\n\nPrepending boolean antecedents does not slow processing significantly for any \nstatement that does not need them. And the implementation of the prover quite \nreasonably requires that two things must be declared to be equal in order for \nit to prove that they are always equal; therefore we are not required to state \nthat -(true\u003dfalse)\n\nOne would think that there would be another option: to transform boolean \ncomparisons into logical equivalences like the following modification of the \nabove example:\n\n  p \u003d\u003d\u003d q  \u003d\u003d\u003d  (p\u003dq)   becomes   p \u003d\u003d\u003d q  \u003d\u003d\u003d  (p\u003d\u003d\u003dq)\n   \n\nHowever, treating a boolean result as sometimes an object and sometimes a \npredicate greatly complicates the prover.\n\nTherefore, the user must change all uses of a boolean variable as a predicate \nto a comparison with true, and add the boolean facts for each boolean variable \nor predicate.\n\nHere are the tests of this version of our required statement, along with \nvarious similar statements that it implies, which were useful in testing, as \ncomments.",
  "id": "predicates-and-functions-----(tests-for-the-eleantap-system);special-treatment-for-booleans-as-a-predicate-and-in-(in-)equalities",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 151,
      "value": "#  * Formula \"p \u003d\u003d\u003d (p\u003dq) \u003d\u003d\u003d q\" is a theorem # The prover cannot handle this"
    }
  ],
  "line": 153,
  "name": "Formula \"((p\u003dtrue)\\/(p\u003dfalse)) /\\ ((q\u003dtrue)\\/(q\u003dfalse)) \u003d\u003d\u003e ( (p\u003dtrue) \u003d\u003d\u003d (p\u003dq) \u003d\u003d\u003d (q\u003dtrue) )\" is a theorem",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "((p\u003dtrue)\\/(p\u003dfalse)) /\\ ((q\u003dtrue)\\/(q\u003dfalse)) \u003d\u003d\u003e ( (p\u003dtrue) \u003d\u003d\u003d (p\u003dq) \u003d\u003d\u003d (q\u003dtrue) )",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.formula_is_a_theorem(String)"
});
formatter.result({
  "duration": 216204219,
  "status": "passed"
});
formatter.uri("pl1ta_eTLeanTap_interfaceT.feature");
formatter.feature({
  "line": 1,
  "name": "Interface For Calling Systems     (Tests for the eTLeanTaP system)",
  "description": "  Copyright and license information at bottom of file.\r\n\r\nThe eTLeanTap system provides procedures for a calling system to load axioms\r\nand prove theorems sequentially, with each theorem building upon the previous\r\nones.\r\n\r\nThe axioms and theorems must be loaded in one file. An example is at\r\n  ...\\TLantlr\\Cucumber\\Features\\aa1_valueNamesEndToEnd.feature\r\nstarting at about line 130.",
  "id": "interface-for-calling-systems-----(tests-for-the-etleantap-system)",
  "keyword": "Feature"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#  And debugging on"
    }
  ],
  "line": 17,
  "name": "using feature \"pl1ta_eTLeanTap_interfaceT\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 30359,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 14523071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pl1ta_eTLeanTap_interfaceT",
      "offset": 15
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.using_feature(String)"
});
formatter.result({
  "duration": 68512,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Establish a new state to start loading and proving axioms sequentially",
  "description": "",
  "id": "interface-for-calling-systems-----(tests-for-the-etleantap-system);establish-a-new-state-to-start-loading-and-proving-axioms-sequentially",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "the prover is called with \"newState(7, State)\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the variable \"State\" contains the value \"[[],[],[],[]]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "the query \"with_limit\" fails",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the query \"limit_reached\" fails",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the query \"limit(7)\" succeeds",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the query \"maxLimit(7)\" succeeds",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the query \"unexpandedFormulas([])\" succeeds",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the query \"consistentLiterals([])\" succeeds",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the query \"freeVariables([])\" succeeds",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the query \"guardedExpressions([])\" succeeds",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "newState(7, State)",
      "offset": 27
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_prover_is_called_with_line(String)"
});
formatter.result({
  "duration": 1391999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "State",
      "offset": 14
    },
    {
      "val": "[[],[],[],[]]",
      "offset": 41
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_variable_contains_the_value(String,String)"
});
formatter.result({
  "duration": 99282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "with_limit",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_query_fails(String)"
});
formatter.result({
  "duration": 153846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "limit_reached",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_query_fails(String)"
});
formatter.result({
  "duration": 132102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "limit(7)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_query_succeeds(String)"
});
formatter.result({
  "duration": 157128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "maxLimit(7)",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_query_succeeds(String)"
});
formatter.result({
  "duration": 96411,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unexpandedFormulas([])",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_query_succeeds(String)"
});
formatter.result({
  "duration": 114461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "consistentLiterals([])",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_query_succeeds(String)"
});
formatter.result({
  "duration": 95589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "freeVariables([])",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_query_succeeds(String)"
});
formatter.result({
  "duration": 62359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "guardedExpressions([])",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_query_succeeds(String)"
});
formatter.result({
  "duration": 82461,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#  And debugging on"
    }
  ],
  "line": 17,
  "name": "using feature \"pl1ta_eTLeanTap_interfaceT\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 22975,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 14042251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pl1ta_eTLeanTap_interfaceT",
      "offset": 15
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.using_feature(String)"
});
formatter.result({
  "duration": 54154,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 33,
      "value": "# TODO: the new state S needs to contain an empty, fresh, list"
    },
    {
      "line": 34,
      "value": "# for each component of state that need to be carried from one step of the"
    },
    {
      "line": 35,
      "value": "# prover to the next"
    },
    {
      "line": 37,
      "value": "#  UnExp:     list of formulas to be expanded to literal form and tested for"
    },
    {
      "line": 38,
      "value": "#             inconsistency. If a literal is consistent with everything so far,"
    },
    {
      "line": 39,
      "value": "#             it is added to the Lits list. Universally quantified statements are"
    },
    {
      "line": 40,
      "value": "#             recycled to the end of this list for further instantiation"
    },
    {
      "line": 41,
      "value": "#  Lits:      list of literals on the current branch that so far are mutually"
    },
    {
      "line": 42,
      "value": "#             consistent."
    },
    {
      "line": 43,
      "value": "#  FreeV      List of free variables created for All-statements. It is used to"
    },
    {
      "line": 44,
      "value": "#             ensure the continuity of all-variables in expanding nested"
    },
    {
      "line": 45,
      "value": "#             all-statements. If, in future versions, all-statements are"
    },
    {
      "line": 46,
      "value": "#             allowed to contain guarded expression statements, guarded"
    },
    {
      "line": 47,
      "value": "#             expression processing will need to also account for free"
    },
    {
      "line": 48,
      "value": "#             variables in its copying of guarded expressions."
    },
    {
      "line": 49,
      "value": "#  Guarded:   List of guarded expressions. Guarded expressions are a kind of"
    },
    {
      "line": 50,
      "value": "#             one way if-statement, very similar to Prolog Horn clauses."
    },
    {
      "line": 51,
      "value": "#                 guarded(Guard,Expression)"
    },
    {
      "line": 52,
      "value": "#             For all guards that are matched by the current literal, the"
    },
    {
      "line": 53,
      "value": "#             corresponding Expressions are placed on Unexp, the list of"
    },
    {
      "line": 54,
      "value": "#             unexplored expressions. The exception is that Expressions which"
    },
    {
      "line": 55,
      "value": "#             are  themselves guarded expressions are immediately placed on"
    },
    {
      "line": 56,
      "value": "#             this guarded expression list. Also, some guarded expressions are"
    },
    {
      "line": 57,
      "value": "#             written as Prolog facts: the guarded expressions for three basic"
    },
    {
      "line": 58,
      "value": "#             rules of the transitivity of equality are hard coded prolog"
    },
    {
      "line": 59,
      "value": "#             facts, and type definitions are asserted as Prolog facts."
    }
  ],
  "line": 63,
  "name": "Copyright and License",
  "description": "\r\n  Copyright (c) George S. Cowan, 2016. Licensed under the BSD 3-clause\r\n  License which can be found packaged with the eLeanTaP system or at\r\n\r\n  https://opensource.org/licenses/BSD-3-Clause",
  "id": "interface-for-calling-systems-----(tests-for-the-etleantap-system);copyright-and-license",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 70,
  "name": "End of \"Copyright and License\"",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "Copyright and License",
      "offset": 8
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.end_of(String)"
});
formatter.result({
  "duration": 56616,
  "status": "passed"
});
formatter.uri("pl1xx_eTLeanTaP_TEST.feature");
formatter.feature({
  "line": 1,
  "name": "Special Test     (Tests for the eLeanTaP system)",
  "description": "  Copyright and license information at bottom of file.\n\n  This file contains tests that are being focused on.",
  "id": "special-test-----(tests-for-the-eleantap-system)",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 14,
      "value": "#Scenario: FROM EQUALITY - Transitive chain on each side of an inequality"
    },
    {
      "line": 15,
      "value": "#"
    },
    {
      "line": 16,
      "value": "#  * Formula \"(a\u003db) /\\ (b\u003dc) /\\ (c#\u003dd ) /\\ (d\u003de) /\\ (e\u003df)  \u003d\u003d\u003e (f#\u003da)\" is a theorem"
    },
    {
      "line": 17,
      "value": "#"
    },
    {
      "line": 18,
      "value": "# This next formula violates the depth limit for using guarded expressions"
    },
    {
      "line": 19,
      "value": "#  * Formula \"(a\u003db) /\\ (b\u003dc) /\\ (c#\u003dd) /\\ (d\u003de) /\\ (e\u003df)  \u003d\u003d\u003e (f\u003da)\" is not a theorem"
    },
    {
      "line": 21,
      "value": "#Scenario: FROM PRED and FNS - Additional unnamed items do not necessarily exist"
    },
    {
      "line": 22,
      "value": "#"
    },
    {
      "line": 23,
      "value": "#    The existence of items must be specified in order for us to depend upon"
    },
    {
      "line": 24,
      "value": "#    their existance. For instance, the theory of natural numbers specifies that"
    },
    {
      "line": 25,
      "value": "#    zero exists, and allows us to prove that the rest of the natural numbers"
    },
    {
      "line": 26,
      "value": "#    exist, but in general we cannot assume that things exist. So we cannot"
    },
    {
      "line": 27,
      "value": "#    prove that there is something different than a."
    },
    {
      "line": 28,
      "value": "#"
    },
    {
      "line": 29,
      "value": "#    The last formula can perhaps be understood as claiming that two different"
    },
    {
      "line": 30,
      "value": "#    objects exist which are equal, but another interpretation is that there are"
    },
    {
      "line": 31,
      "value": "#    two different names for the same object."
    },
    {
      "line": 32,
      "value": "#"
    },
    {
      "line": 33,
      "value": "#  * Formula \"ex(X,(a#\u003dX))\" is not a theorem"
    },
    {
      "line": 34,
      "value": "#"
    },
    {
      "line": 35,
      "value": "#  And formula \"-ex(X,(a#\u003dX))\" is not a theorem"
    },
    {
      "line": 36,
      "value": "#"
    },
    {
      "line": 37,
      "value": "#  But formula \"-(a \u003d b) \u003d\u003d\u003e ex(X,-(a\u003dX))\" is a theorem"
    },
    {
      "line": 38,
      "value": "#"
    },
    {
      "line": 39,
      "value": "#  And formula \"ex(Y,a#\u003dY) \u003d\u003d\u003e ex(X,-(a\u003dX))\" is a theorem"
    },
    {
      "line": 40,
      "value": "#"
    },
    {
      "line": 41,
      "value": "#  * Formula \"(a\u003db) \u003d\u003d\u003e ex(X, (a\u003dX))\" is a theorem"
    }
  ],
  "line": 43,
  "name": "Tests",
  "description": "",
  "id": "special-test-----(tests-for-the-eleantap-system);tests",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "the FOP is \"\u003cStatement\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "it is a \"\u003cResult\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Note that \"\u003cNote\u003e\"",
  "keyword": "* "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "special-test-----(tests-for-the-eleantap-system);tests;",
  "rows": [
    {
      "cells": [
        "Result",
        "Statement",
        "Note"
      ],
      "line": 50,
      "id": "special-test-----(tests-for-the-eleantap-system);tests;;1"
    },
    {
      "comments": [
        {
          "line": 51,
          "value": "#-----------|----------------------------------|---------------------------|"
        }
      ],
      "cells": [
        "theorem",
        "a \u003d b \u003d\u003d\u003e f(a) \u003d f(b)",
        "from preds\u0026fns - works in natural ordering"
      ],
      "line": 52,
      "id": "special-test-----(tests-for-the-eleantap-system);tests;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#  And debugging on"
    }
  ],
  "line": 11,
  "name": "using feature \"pl1xx_eTLeanTaP_TEST\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 20923,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 14834045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pl1xx_eTLeanTaP_TEST",
      "offset": 15
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.using_feature(String)"
});
formatter.result({
  "duration": 47179,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 51,
      "value": "#-----------|----------------------------------|---------------------------|"
    }
  ],
  "line": 52,
  "name": "Tests",
  "description": "",
  "id": "special-test-----(tests-for-the-eleantap-system);tests;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "the FOP is \"a \u003d b \u003d\u003d\u003e f(a) \u003d f(b)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "it is a \"theorem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Note that \"from preds\u0026fns - works in natural ordering\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "a \u003d b \u003d\u003d\u003e f(a) \u003d f(b)",
      "offset": 12
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.the_FOP_is(String)"
});
formatter.result({
  "duration": 71795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "theorem",
      "offset": 9
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.it_is_a(String)"
});
formatter.result({
  "duration": 31641012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "from preds\u0026fns - works in natural ordering",
      "offset": 11
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.Note_that(String)"
});
formatter.result({
  "duration": 42257,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "The theorem prover is loaded into a tuProlog engine",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "a Prolog engine",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the eTLeanTap theory is loaded",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#  And debugging on"
    }
  ],
  "line": 11,
  "name": "using feature \"pl1xx_eTLeanTaP_TEST\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.a_Prolog_engine()"
});
formatter.result({
  "duration": 22564,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.the_eTLeanTap_theory_is_loaded()"
});
formatter.result({
  "duration": 14746250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pl1xx_eTLeanTaP_TEST",
      "offset": 15
    }
  ],
  "location": "StepDefinitions_eTLeanTaP.using_feature(String)"
});
formatter.result({
  "duration": 59897,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 53,
      "value": "#    | theorem   |  b \u003d a \u003d\u003d\u003e f(a) \u003d f(b)           | from preds\u0026fns            |"
    },
    {
      "line": 54,
      "value": "#    | theorem   |  -(f(a) \u003d f(b)) \u003d\u003d\u003e -(b \u003d a)     | modis tolens version from preds\u0026fns|"
    },
    {
      "line": 55,
      "value": "#    | theorem   |  (f(a) \u003d f(b)) \\/ -(a \u003d b)       | from preds\u0026fns            |"
    },
    {
      "line": 56,
      "value": "#    | theorem   | (a\u003dc) /\\ -(b\u003dc) \u003d\u003d\u003e -(a\u003db)       | from equality             |"
    },
    {
      "line": 57,
      "value": "#    | theorem   | -p(a) /\\ p(f(a,b)) /\\ (f(a,b)\u003dg(b,a))/\\p(g(c,a)) \u003d\u003d\u003e p(f(a,b)) |Simple a \u003d\u003d\u003e a with distractions, from Preds\u0026fns |"
    },
    {
      "line": 58,
      "value": "#    | theorem   | (a \u003d b) /\\ p(c,f(a)) \u003d\u003d\u003e p(c,f(b)) | from Preds\u0026fns     |"
    },
    {
      "line": 59,
      "value": "#    | theorem   | all(X, p(X)) \u003d\u003d\u003e p(a) | From Pred calculus tests      |"
    },
    {
      "line": 60,
      "value": "#    | theorem   | all(Y,p(a,Y)       \u003d\u003d\u003d  p(Y,a))   /\\ p(a,b) \u003d\u003d\u003e p(b,a) | gnzd 1|"
    },
    {
      "line": 61,
      "value": "#    | theorem   | all(X,p(X,b)       \u003d\u003d\u003d  p(b,X))   /\\ p(a,b) \u003d\u003d\u003e p(b,a) | gnzd 2|"
    },
    {
      "line": 62,
      "value": "#    | theorem   | all(X,all(Y,p(X,Y) \u003d\u003d\u003d  p(Y,X) )) /\\ p(a,b) \u003d\u003d\u003e p(b,a) | gnzd 3|"
    },
    {
      "line": 63,
      "value": "#    | theorem   | ((a\u003db) /\\ (b\u003dc) \u003d\u003d\u003e (a\u003dc))       | Transitivity of \u003d, (1.4) from equality |"
    },
    {
      "line": 64,
      "value": "#    | theorem   |  -(f(a) \u003d f(b)) \u003d\u003d\u003e -(a \u003d b)     | modis tolens version      |"
    },
    {
      "line": 65,
      "value": "#    |non-theorem| all(X,-(a\u003dX))                    |                           |"
    },
    {
      "line": 66,
      "value": "#    | theorem   | ((p\u003d\u003d\u003dq) \u003d\u003d\u003d r) \u003d\u003d\u003d (p \u003d\u003d\u003d (q\u003d\u003d\u003dr)) | from eq and truth, associativity of \u003d\u003d\u003d |"
    },
    {
      "line": 67,
      "value": "#    | theorem   |  p(a) /\\ (a\u003db) \u003d\u003d\u003e p(b)          |                           |"
    },
    {
      "line": 68,
      "value": "#    | theorem   |  -p(a) \\/ p(b) \\/ -(a\u003db)         | from preds\u0026fns            |"
    },
    {
      "line": 69,
      "value": "#    |non-theorem|  (f(a) \u003d f(b)) \u003d\u003d\u003e (a \u003d b)       | converse - move to preds\u0026fns after testing |"
    },
    {
      "line": 72,
      "value": "#Scenario: Transitive elements out of order"
    },
    {
      "line": 73,
      "value": "#"
    },
    {
      "line": 74,
      "value": "#    Check that this works: A test for an \"out of order\" transitive proof. From"
    },
    {
      "line": 75,
      "value": "#    Equality tests."
    },
    {
      "line": 76,
      "value": "#"
    },
    {
      "line": 77,
      "value": "#  * Formula \"(a\u003dc) \\/ -((a\u003db) /\\ (b\u003dc))\" is a theorem"
    }
  ],
  "line": 79,
  "name": "Turn off debugging",
  "description": "",
  "id": "special-test-----(tests-for-the-eleantap-system);turn-off-debugging",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 81,
  "name": "Debugging off",
  "keyword": "* "
});
formatter.match({
  "location": "StepDefinitions_eTLeanTaP.debugging_off()"
});
formatter.result({
  "duration": 12308,
  "status": "passed"
});
});