# The Variable-Value approach to Programming <br> And The TrueJ Project

The TrueJ programming language is a Java-like language that is being developed to serve as an example of Variable-Value programming. The code repository is at <https://github.com/Variable-Value/TrueJ>

### Results from a Recent Test of the Specifications

One way to learn the TrueJ language is by reading the [results from the testable
specifications](https://variable-value.github.io/TestResults/ReadyFeatures.html). These are
formatted for readability, except that to get to the readable part you have to decide which mangled
file name you need to click on. Look at the end of the lines to see the name of the features and
click anywhere on the line to open the readable test results for that feature. The names that begin
with a single alphabetic character, like `.../a_valueNames.feature`, show the main features of TrueJ
in a suggested reading order.

The Cucumber code is also available for the
[testable specifications](https://github.com/Variable-Value/TrueJ/tree/main/src/test/resources/tlang/Features/A%20-%20Spec%20Features).


### Results from a Recent Test of the Prover's Executable Specification

TrueJ code commands are also declarative statements, and the compiler proves that they support any
additional claims or specifications in the code. Another way to think of it is that that the
compiler proves that these factual claims about the program's data or specifications of the state
are true when the code execution reaches them. The prover that is used in the compiler also has
testable specifications. However, readability is a work in progress for these [test
results](https://variable-value.github.io/TestResults/ProverFeatures.html). The Cucumber code for the [prover's testable
specifications](https://github.com/Variable-Value/TrueJ/tree/main/src/test/resources/ProofTestFeatures) are
also available.
