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
            The following are essentially equivalent:
        </p>
        <CodeSnippet :code="functionDeclarations"></CodeSnippet>

        <p>There is a key difference between the above examples: using the arrow syntax <code>() =></code> means your function does not have its own <code>this</code> context.
           Instead, its <code>this</code> refers to the parent/enclosing scope's context which could be a parent function, a VueJS component, or even the Window or global object.
        </p>

        <p>
            * See example exercises.
        </p>
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

        <p>
            * See example exercises.
        </p>
        <hr>

        <h3>Objects</h3>
        <p>You can create anonymous objects easily. They're essentially just a grouped set of key/value pairs:</p>
        <p><CodeSnippet :code="anonymousObject"></CodeSnippet></p>
        <p>Anonymous objects can often be found when working with front end frameworks - for example, to set some in-template stylings:</p>
        <p><CodeSnippet :code="inTemplateObject"></CodeSnippet></p>
        
        <p>
            Objects can be derived from <code>Class</code>es (like you may or may not be familiar with already.) The following is a side by side of the same class in vanilla JS and what you might expect to see in a TypeScript file:
        </p>
        
        <CodeSnippet :code="objectFromClass"></CodeSnippet>

        <CodeSnippet :code="objectFromClassTypeScript"></CodeSnippet>

        <CodeSnippet :code="objectUse"></CodeSnippet>
        
        <p>What benefit do we get in the case of the TypeScript version vs. the vanilla JavaScript version above?</p>
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
        <p>Promises are useful when we want to be able to continue doing other things while we wait for some task to complete.</p>
        <p>They also allow us to create situations where some code waits on that task to complete while other code continues right along whether that task has completed or not.</p>
        <p><CodeSnippet :code="promiseWaiting"></CodeSnippet></p>
        <p>So what does creating a promise from scratch look like? In a simple example, we might have:</p>
        <p><CodeSnippet :code="promiseSyntax"></CodeSnippet></p>
        <p>Can you draw any parallels to the real world based on this description?</p>
        <p>
            It is more likely that you'll be consuming promises rather than creating them from scratch. What does that look like?
            <CodeSnippet :code="promiseConsume"></CodeSnippet>
        </p>
        <p>
            In general, the process is:
            <ol>
                <li>Call some function that returns a promise, such as <code>fetch()</code></li>
                <li>If some functionality is dependent upon the completion of that function, put it in a <code>.then()</code> block</li>
                <li>If any functionality is dependent upon completion of the <code>.then()</code> block, you can chain <code>.then()</code> blocks as needed</li>
                <li>To handle a rejected call or any kind of failures (such as <code>500</code>s or any other HTTP errors), add a <code>.catch()</code> block to the chain</li>
                <li>For functionality that depends on the call completing but must run whether it is succesful or not, add a <code>.finally()</code> to the end of the chain</li>
            </ol>
            <br/>
            <CodeSnippet :code="promiseOverview"></CodeSnippet>
        </p>
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

    private promiseSyntax: string =
    `
    let promiseToDoSomething = new Promise((resolve, reject) => {
        // do something

        if (someConditionIsMet) {
            resolve('success message');
        } else {
            reject('failure message');
        }
    });
    `;

    private promiseConsume: string =
    `
    promiseToDoSomething()
    .then(result => {
        console.log("The promise resolved successfully: " + result);
    })
    .catch(result => {
        console.log("The promise was rejected: " + result);
    })
    `;

    private promiseWaiting: string =
    `
fetch('https://example.com/api/GetSomeData')
  .then(response => response.json())     // .then() blocks can't run until the call before it completes
  .then(data => console.log(data))       // so these 2 .then() blocks always run in order
  .catch(error => console.error(error));

  // other code that doesn't depend on the response from the fetch() above will continue to run
    `;

    private promiseOverview: string =
    `
    promiseToDoSomething()
    .then(result => {
        // cannot run until promiseToDoSomething yields some kind of result (stored in result)
    })
    .then(resultFromPrior => {
        // cannot run until the previous .then() block has returned a result (stored in resultFromPrior)
    })
    .catch(error => {
        // will catch errors / rejected promises
    })
    .finally(fin => {
        // will always run (even after errors), but not until the entire chain above has completed
    });
    `;

    private objectFromClass: string =
    `
    class Point {
        x;
        y;

        constructor(x, y) {
            this.x = x || 0;
            this.y = y || 0;
        }

        static distance(a, b) {
            const dx = a.x - b.x;
            const dy = a.y - b.y;

            return Math.hypot(dx, dy);
        }
    }
    `;

    private objectFromClassTypeScript: string =
    `
    export default class Point {
        private x: number;
        private y: number;

        constructor(x: number, y: number) {
            this.x = x || 0;
            this.y = x || 0;
        }

        static distance(p1: Point, p2: Point): number {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;

            return Math.hypot(dx, dy);
        }
    }
    `;

    private objectUse: string =
    `
    // Create some points:
    const p1 = new Point(5, 5);
    const p2 = new Point(10, 10);
    const p3 = new Point();  // defaults to (0, 0)

    // distance is a static method - called without an instance of the class
    p1.distance;   // undefined
    p2.distance(); // TypeError: p2.distance is not a function

    // call .distance() like a static method in other languages using the class instead of an instance:
    Point.distance(p1, p2);
    `;

    private anonymousObject: string =
    `
    var rectangle = {
        height: 8,
        width: 5,
        color: "#abcdef",
        corners: [
            { x: 0, y: 0 },
            { x: 5, y: 0 },
            { x: 0, y: -8 },
            { x: 5, y: -8 },
        ]
    }
    `;

    private inTemplateObject: string =
    `
    <div v-bind:class="{ active: isActive, 'text-danger': hasError }">
        <p>More Content Here.</p>
    </div>
    `;
}
</script>

<style lang="scss" scoped>
hr {
    margin: 64px auto;
}
</style>