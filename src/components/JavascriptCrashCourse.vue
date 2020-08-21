<template>
    <section-component>
        <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?skin=sons-of-obsidian" type="application/javascript"></script>
        <template slot="title">JavaScript: A Quick Intro</template>
        <template slot="header">
            The following is meant to be a quick course in the basics of JavaScript / TypeScript for those with at least <i>some</i> experience in any object oriented programming language.
        </template>
        <h3>Variable Declarations</h3>
        <p>
            <code>let</code> declares a block-scope variable<br/>
            <code>const</code> declares a block-scoped constant<br/>
            <code>var</code> declares a function-scope* variable<br/>
            <br/>
            Stick to your typical variable naming rules.
        </p>
    
        <h3>Function Declarations</h3>
        <p>
            The following are equivalent:
        </p>
        <CodeSnippet :code="functionDeclarations"></CodeSnippet>

        <hr>

        <h3>Data Types</h3>
        <ul>
            <li><code>undefined</code> - automatic value for uninitialized variables and unassigned formal arguments</li>
            <li><code>boolean</code> - can be <code>true</code> or <code>false</code></li>
            <li><code>number</code> - double-precision 64-bit floating point</li>
            <li><code>string</code></li>
            <li><code>bigint</code> - arbitrary precision</li>
            <li><code>symbol</code> - guaranteed to be unique</li>
            <li><code>Object</code> - almost anything made with the <code>new</code> keyword (Object, Array, Map, Set, Date, etc.)</li>
            <li><code>Function</code> - technically every Function is derived from <code>Object</code> constructor.</li>
        </ul>
        <CodeSnippet :code="dataTypes"></CodeSnippet>

        <hr>

        <h3>String Interpolation</h3>
        <p>There are several ways to handle string interpolation. There's the old "standard" way:</p>
        <CodeSnippet :code="stringInterpolation"></CodeSnippet>
        <p>There are also template literals:</p>
        <CodeSnippet :code="templateLiterals"></CodeSnippet>

        <hr>

        <h3>Arrays</h3>
        <p>Arrays work more or less the way you would expect, with a few exceptions. For example, an array can contain values of varying types.</p>
        <CodeSnippet :code="variableArray"></CodeSnippet>
        <p>Since they are objects, they have properties and methods such as <code>Array.length</code> or <code>Array.push(value)</code>.
        <p>Some of the most common / helpful array methods and properties:</p>
        <ul>
            <li><code>.length</code> - the number of elements in the array</li>
            <li><code>.filter(func)</code> - returns a new array containing all elements for which the specified function returns <code>true</code></li>
            <li><code>.find(func)</code> - returns the first array element for which the specified function returns <code>true</code></li>
            <li><code>.forEach(func)</code> - executes the specified function on each element in the array</li>
            <li><code>.includes(val)</code> - determines whether the array contains a specified value</li>
            <li><code>.map(func)</code> - returns a new array containing the results of calling a function on every element in this array</li>
            <li><code>.reduce(func)</code> - perform a function against an accumulator and each array element, reducing it to a single value</li>
            <li><code>.sort(func)</code> - sorts an array</li>
        </ul>
        <CodeSnippet :code="arrayHelp"></CodeSnippet>

        <hr>

        <h3>Objects</h3>

        <hr>
        
        <h3>Control Flow / Looping</h3>
        <p>
            The rules for control flow and looping that you're familiar with from other languages apply to JavaScript.<br/>
            You have access to the usual <code>if</code>, <code>if/else</code>, <code>switch</code>, <code>for</code>, <code>while</code>, <code>do...while</code>, etc.<br/>
            The evaluation shortcut found in languages like C/C++ is available as well (if the value is non-zero and not <code>null</code>, <code>undefined</code> or explicitly <code>false</code>, then it evaluates to <code>true</code>.)
        </p>

        <p>
            What actually evaluates to <code>false</code> in JavaScript? All of the following:
        </p>
        <ul>
            <li><code>false</code></li>
            <li><code>0</code> and all variants (<code>0.0</code>, <code>0x0</code>, <code>-0</code>, <code>0n</code>, <code>-0n</code>)</li>
            <li><code>""</code>, <code>''</code>, <code>``</code>, and strings of length <code>0</code></li>
            <li><code>null</code></li>
            <li><code>undefined</code></li>
            <li><code>NaN</code></li>
        </ul>
        
        <hr>

        <h3>Comparisons</h3>
        <p>There are 2 types of checks for sameness - "strict" and "loose" wherein the "strict" check also looks at the <i>type</i> of the operands, and the "loose" check does not.
        <ul>
            <li><code>==</code>
                <ul>
                    <li>will "coerce" or implicitly convert values - for example, <code>5 == "5"</code> resolves to <code>true</code> even though the left operand is a <code>number</code> and the right operand is a <code>string</code>.</li>
                </ul>
            </li>
            <li>
                <code>===</code>
                <ul>
                    <li>will check if values are equal in value <i>and</i> type - for example, <code>5 === "5"</code> is false.</li>
                </ul>
            </li>
            <li>
                <code>!=</code>
                <ul>
                    <li>will "coerce" or implicitly convert values - for example <code>5 != "5"</code> is false, because when <code>"5"</code> is implicitly converted <code>ToNumber()</code>, they are indeed equal.</li>
                </ul>
            </li>
            <li>
                <code>!==</code>
                <ul>
                    <li>not equal in value <i>or</i> not equal in type - for example, <code>5 !== "5"</code> is true because a <code>number</code> is not the same type as a <code>string</code>.</li>
                </ul>
            </li>
        </ul>
        <p>Additionally, all of the typical equality and boolean operations you're used to are also available.</p>
        <hr>
        <h3>Promises</h3>
    </section-component>

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SectionComponent from '@/components/SectionComponent.vue';
import CodeSnippet from '@/components/CodeSnippet.vue';

@Component({
    components: {
        SectionComponent,
        CodeSnippet
    }
})
export default class JavascriptCrashCourse extends Vue {
    private functionDeclarations: string =
    `    function addTwoNumbers (x, y) {
        return x + y;
    }

    let addTwoNumbers = function (x, y) {
        return x + y;
    }

    let addTwoNumbers = (x, y) => x + y;
    `;

    private dataTypes: string =
    `    var x;                                    // declare variable but assign no value;
    console.log("x's value is", x);           // output: "x's value is undefined"
    console.log("x's type is", typeof of);    // output: "x's type is undefined"

    let thing = Symbol("optional desc");      // description for debug purposes only
    // based on the introduction to Vue, what might the Symbol type be useful for?
    `;

    private variableArray: string =
    `const myArray = ["Hello", 1, 'another string', 1.23, { name: "Somebody", age: 99 }];

// this is a valid array, even though it contains strings, ints, floats, and even an object.
    `;

    private arrayHelp: string =
    `    const myArray = [
        { name: "cat", legs: 4, hasTail: true, hasWings: false },
        { name: "bird", legs: 2, hasTail: true, hasWings: true },
        { name: "dog", legs: 4, hasTail: true, hasWings: false },
        { name: "octopus", legs: 8, hasTail: false, hasWings: false }
    ];

    myArray.forEach(function(animal) {
        console.log(animal.name + " has " + animal.legs + " legs.");
    });

    // which is equivalent to:
    myArray.forEach(animal => { console.log(\`\${animal.name} has \${animal.legs} legs.\`) });

    // which is equivalent to:
    myArray.forEach(a => console.log(\`\${a.name} has \${a.legs} legs.\`));
    `;

    private stringInterpolation: string =
    `const dogs = 3;
const cats = 2;

console.log("With " + dogs + " dogs and " + cats + " cats, I have " + (dogs + cats) + " pets.");
// are the parentheses required for the addition of (dogs + cats)? why or why not?
    `;

    private templateLiterals: string =
    `    const dogs = 3;
    const cats = 2;

    console.log(\`With \${dogs} dogs and \${cats} cats, I have \${dogs + cats} pets.\`);
    `;
}
</script>

<style lang="scss" scoped>
hr {
    margin: 64px auto;
}
</style>