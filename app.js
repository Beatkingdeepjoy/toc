(function(){
"use strict";

/* =========================================================
   0. ICONS
   ========================================================= */
const ICON_PATHS = {
  home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5"/>',
  quiz:'<circle cx="12" cy="12" r="9"/><path d="M9.3 9.2a2.7 2.7 0 0 1 5.2.9c0 1.8-2.5 2.1-2.5 4"/><line x1="12" y1="16.6" x2="12.01" y2="16.6"/>',
  cpu:'<rect x="6" y="6" width="12" height="12" rx="1"/><rect x="10" y="10" width="4" height="4"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  cards:'<rect x="3" y="7" width="13" height="9" rx="1" transform="rotate(-8 9.5 11.5)"/><rect x="8" y="9" width="13" height="10" rx="1"/>',
  chart:'<line x1="4" y1="20.5" x2="20" y2="20.5"/><rect x="6" y="12" width="3.2" height="7"/><rect x="10.4" y="7" width="3.2" height="12"/><rect x="14.8" y="3.5" width="3.2" height="15.5"/>',
  search:'<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.3" y2="16.3"/>',
  star:'<polygon points="12 3 14.7 9 21 9.6 16.3 13.9 17.6 20.2 12 17 6.4 20.2 7.7 13.9 3 9.6 9.3 9"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6"/>',
  moon:'<path d="M20.3 14.7A8.1 8.1 0 1 1 9.3 3.7a6.6 6.6 0 0 0 11 11z"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  close:'<line x1="5" y1="5" x2="15" y2="15"/><line x1="15" y1="5" x2="5" y2="15"/>'
};
function icon(name, size){ size=size||16; return '<svg class="icon" width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+(ICON_PATHS[name]||'')+'</svg>'; }

/* =========================================================
   1. CONTENT DATA — TOPICS
   ========================================================= */
const TOPICS = [
{
  id:'prop-logic', num:'01', title:'Propositional Logic',
  sub:'Connectives, well-formed formulas, tautologies and the identity table you will quote in every proof.',
  subnav:['Connectives','WFFs','Tautologies & Equivalence','Standard Identities','Normal Forms'],
  html:`
  <div class="section-block" data-sub="Connectives">
    <h2>1.1 Propositions and Connectives</h2>
    <div class="def-box"><span class="label">DEFINITION — PROPOSITION</span>
      <p>A declarative statement that is strictly true (T) or false (F), never both. Written with capitals: P, Q, R.</p></div>
    <p>Example propositions: "New Delhi is the capital of India" (T); "The square of 4 is 16" (T).</p>
    <h3>The five primitive connectives</h3>
    <ul>
      <li><b>Negation ¬ (NOT)</b> — ¬P flips the truth value of P.</li>
      <li><b>Conjunction ∧ (AND)</b> — true only when both operands are true.</li>
      <li><b>Disjunction ∨ (OR)</b> — true when at least one operand is true.</li>
      <li><b>Implication ⇒ (IF…THEN)</b> — false only in the single case T ⇒ F; every other combination is true.</li>
      <li><b>Biconditional ⇔ (IFF)</b> — true exactly when both sides share the same truth value.</li>
    </ul>
    <table class="data-table">
      <thead><tr><th>P</th><th>Q</th><th>¬P</th><th>P∧Q</th><th>P∨Q</th><th>P⇒Q</th><th>P⇔Q</th></tr></thead>
      <tbody>
        <tr><td>T</td><td>T</td><td>F</td><td>T</td><td>T</td><td>T</td><td>T</td></tr>
        <tr><td>T</td><td>F</td><td>F</td><td>F</td><td>T</td><td class="hl">F</td><td>F</td></tr>
        <tr><td>F</td><td>T</td><td>T</td><td>F</td><td>T</td><td>T</td><td>F</td></tr>
        <tr><td>F</td><td>F</td><td>T</td><td>F</td><td>F</td><td>T</td><td>T</td></tr>
      </tbody>
    </table>
    <p><b>Exam trap:</b> P ⇒ Q is only false in the T,F row — memorise that single highlighted cell and the rest follows.</p>
  </div>

  <div class="section-block" data-sub="WFFs">
    <h2>1.2 Well-Formed Formulas (WFF)</h2>
    <div class="def-box"><span class="label">RECURSIVE DEFINITION</span>
      <p>(a) Any propositional variable is a WFF. (b) If α is a WFF, ¬α is a WFF. (c) If α, β are WFFs, then (α∧β), (α∨β), (α⇒β), (α⇔β) are WFFs. Nothing else is a WFF.</p></div>
    <div class="example-box"><span class="label">WORKED EXAMPLE</span>
      <p>Evaluate α = (P∨Q) ∧ (P⇒Q) ∧ (Q⇒P):</p>
    </div>
    <table class="data-table">
      <thead><tr><th>P</th><th>Q</th><th>P∨Q</th><th>P⇒Q</th><th>Q⇒P</th><th>α</th></tr></thead>
      <tbody>
        <tr><td>T</td><td>T</td><td>T</td><td>T</td><td>T</td><td class="hl">T</td></tr>
        <tr><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td></tr>
        <tr><td>F</td><td>T</td><td>T</td><td>T</td><td>F</td><td>F</td></tr>
        <tr><td>F</td><td>F</td><td>F</td><td>T</td><td>T</td><td>F</td></tr>
      </tbody>
    </table>
    <p>α is true in exactly the same row as P∧Q — so α ≡ P∧Q. This is the standard trick question: a messy-looking formula often collapses to something small.</p>
  </div>

  <div class="section-block" data-sub="Tautologies & Equivalence">
    <h2>1.3 Tautologies, Contradictions, Equivalences</h2>
    <div class="def-box"><span class="label">TAUTOLOGY</span><p>True under every truth assignment. e.g. P∨¬P, (P∧Q)⇒P.</p></div>
    <div class="def-box"><span class="label">CONTRADICTION</span><p>False under every truth assignment. e.g. P∧¬P, (P∧Q)∧¬Q.</p></div>
    <p><b>Theorem:</b> α is a contradiction ⇔ ¬α is a tautology.</p>
    <div class="def-box"><span class="label">LOGICAL EQUIVALENCE (≡)</span><p>α ≡ β  ⇔  (α⇔β) is a tautology.</p></div>
  </div>

  <div class="section-block" data-sub="Standard Identities">
    <h2>1.4 Table of Standard Logical Identities</h2>
    <div class="example-box"><span class="label">ALGEBRAIC SIMPLIFICATION EXAMPLE</span>
      <p>Prove (P∧Q) ∨ (P∧¬Q) ≡ P:</p>
      <p class="formula">≡ P∧(Q∨¬Q)  [Distributive]<br>≡ P∧T  [Complement: Q∨¬Q≡T]<br>≡ P  [Identity]</p>
    </div>
    <table class="data-table wide">
      <thead><tr><th style="width:34%">Law</th><th>Equivalence</th></tr></thead>
      <tbody>
        <tr><td>Idempotent</td><td>P∨P≡P,&nbsp; P∧P≡P</td></tr>
        <tr><td>Commutative</td><td>P∨Q≡Q∨P,&nbsp; P∧Q≡Q∧P</td></tr>
        <tr><td>Associative</td><td>P∨(Q∨R)≡(P∨Q)∨R</td></tr>
        <tr><td>Distributive</td><td>P∨(Q∧R)≡(P∨Q)∧(P∨R)</td></tr>
        <tr><td>Absorption</td><td>P∨(P∧Q)≡P,&nbsp; P∧(P∨Q)≡P</td></tr>
        <tr><td>De Morgan's</td><td>¬(P∨Q)≡¬P∧¬Q,&nbsp; ¬(P∧Q)≡¬P∨¬Q</td></tr>
        <tr><td>Double Negation</td><td>¬(¬P)≡P</td></tr>
        <tr><td>Complement</td><td>P∨¬P≡T,&nbsp; P∧¬P≡F</td></tr>
        <tr><td>Identity / Domination</td><td>P∨F≡P,&nbsp;P∧T≡P,&nbsp;P∨T≡T,&nbsp;P∧F≡F</td></tr>
        <tr><td>Implication Identity</td><td>P⇒Q ≡ ¬P∨Q</td></tr>
        <tr><td>Contrapositive</td><td>P⇒Q ≡ ¬Q⇒¬P</td></tr>
        <tr><td>Reductive Identity</td><td>(P⇒Q)∧(P⇒¬Q) ≡ ¬P</td></tr>
      </tbody>
    </table>
  </div>

  <div class="section-block" data-sub="Normal Forms">
    <h2>1.5 Normal Forms</h2>
    <p>For <b>n</b> boolean variables there are 2<sup>n</sup> truth combinations and 2<sup>2<sup>n</sup></sup> distinct boolean functions.</p>
    <ul>
      <li><b>Literal</b> — a variable P or its negation ¬P.</li>
      <li><b>Elementary product (minterm clause)</b> — a conjunction of literals.</li>
      <li><b>Elementary sum (maxterm clause)</b> — a disjunction of literals.</li>
      <li><b>DNF</b> — a disjunction of elementary products, e.g. (P∧Q)∨(Q∧R)∨¬P.</li>
      <li><b>PDNF</b> — canonical DNF where every elementary product contains all variables exactly once (complemented or not). Unique up to permutation; two formulas are equivalent iff their PDNFs match term-for-term.</li>
    </ul>
  </div>`
},
{
  id:'predicate-logic', num:'02', title:'Predicate Logic & Formal Inference',
  sub:'Quantifiers, predicate WFFs, and two fully worked deduction chains — one propositional, one predicate.',
  subnav:['Quantifiers & WFFs','Inference Rules Used','Derivation 1','Derivation 2'],
  html:`
  <div class="section-block" data-sub="Quantifiers & WFFs">
    <h2>2.1 First-Order Predicates and Quantifiers</h2>
    <p>Predicate logic adds variables over domain objects and relations on top of propositional logic.</p>
    <ul>
      <li><b>Predicate</b> P(x) — asserts object x has property P.</li>
      <li><b>Universal quantifier ∀</b> — ∀x P(x): P holds for every x in the domain.</li>
      <li><b>Existential quantifier ∃</b> — ∃x P(x): P holds for at least one x.</li>
    </ul>
    <div class="def-box"><span class="label">WFFs IN PREDICATE CALCULUS</span>
      <p>(a) P(x₁,…,xₙ) is atomic. (b) ¬α is a WFF if α is. (c) α∧β, α∨β, α⇒β, α⇔β are WFFs. (d) ∀x α and ∃x α are WFFs when x is an individual variable.</p></div>
  </div>
  <div class="section-block" data-sub="Inference Rules Used">
    <h2>2.2 Inference rules you need for both derivations</h2>
    <ul>
      <li><b>Hypothetical Syllogism</b> — from A⇒B and B⇒C, conclude A⇒C.</li>
      <li><b>Modus Tollens</b> — from A⇒B and ¬B, conclude ¬A.</li>
      <li><b>De Morgan's Law</b> — ¬(A∨B) ≡ ¬A∧¬B.</li>
      <li><b>Conjunctive Simplification</b> — from A∧B, conclude A (or B).</li>
      <li><b>Universal Instantiation</b> — from ∀x P(x), conclude P(a) for a specific a.</li>
      <li><b>Modus Ponens</b> — from A⇒B and A, conclude B.</li>
    </ul>
  </div>
  <div class="section-block" data-sub="Derivation 1">
    <h2>Derivation 1 — Propositional argument</h2>
    <div class="example-box"><span class="label">PREMISES</span>
      <p>1. (P∨Q) ⇒ R — "B.Tech or MBA guarantees a good job"<br>
         2. R ⇒ S — "a good job makes Ram happy"<br>
         3. ¬S — "Ram is not happy"<br>
         Conclusion to prove: ¬Q ("Ram did not complete MBA")</p>
    </div>
    <table class="data-table wide">
      <thead><tr><th style="width:10%">#</th><th>Step</th><th style="width:38%">Justification</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>(P∨Q)⇒R</td><td>Premise 1</td></tr>
        <tr><td>2</td><td>R⇒S</td><td>Premise 2</td></tr>
        <tr><td>3</td><td>(P∨Q)⇒S</td><td>Hypothetical syllogism, 1+2</td></tr>
        <tr><td>4</td><td>¬S</td><td>Premise 3</td></tr>
        <tr><td>5</td><td>¬(P∨Q)</td><td>Modus tollens, 3+4</td></tr>
        <tr><td>6</td><td>¬P ∧ ¬Q</td><td>De Morgan's law on 5</td></tr>
        <tr><td>7</td><td class="hl">∴ ¬Q</td><td>Conjunctive simplification, 6</td></tr>
      </tbody>
    </table>
    <p>The argument is valid.</p>
  </div>
  <div class="section-block" data-sub="Derivation 2">
    <h2>Derivation 2 — Predicate inference</h2>
    <div class="example-box"><span class="label">PREMISES</span>
      <p>1. ∀x (G(x) ⇒ E(x)) — "all graduates are educated"<br>
         2. G(R) — "Ram is a graduate"<br>
         Conclusion to prove: E(R)</p>
    </div>
    <table class="data-table wide">
      <thead><tr><th style="width:10%">#</th><th>Step</th><th style="width:44%">Justification</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>∀x (G(x)⇒E(x))</td><td>Premise 1</td></tr>
        <tr><td>2</td><td>G(R)⇒E(R)</td><td>Universal instantiation on 1</td></tr>
        <tr><td>3</td><td>G(R)</td><td>Premise 2</td></tr>
        <tr><td>4</td><td class="hl">∴ E(R)</td><td>Modus ponens, 2+3</td></tr>
      </tbody>
    </table>
    <p>The argument is valid.</p>
  </div>`
},
{
  id:'sets-graphs', num:'03', title:'Sets, Binary Operations & Graph Foundations',
  sub:'Set fundamentals, algebraic-structure axioms, and the four graph theorems examiners love to test.',
  subnav:['Set Theory','Binary Operations','Graphs & Trees','Key Theorems'],
  html:`
  <div class="section-block" data-sub="Set Theory">
    <h2>3.1 Set Theory Fundamentals</h2>
    <ul>
      <li><b>Roster</b> — listing elements; <b>Set-builder</b> — {x | P(x)}; <b>Recursive</b> — e.g. a₀=1, aₙ=aₙ₋₁+3.</li>
    </ul>
    <table class="data-table wide">
      <thead><tr><th style="width:26%">Operation</th><th>Definition</th></tr></thead>
      <tbody>
        <tr><td>Subset A⊆B</td><td class="formula">∀x (x∈A ⇒ x∈B)</td></tr>
        <tr><td>Union A∪B</td><td class="formula">{x | x∈A ∨ x∈B}</td></tr>
        <tr><td>Intersection A∩B</td><td class="formula">{x | x∈A ∧ x∈B}</td></tr>
        <tr><td>Difference A\\B</td><td class="formula">{x | x∈A ∧ x∉B}</td></tr>
      </tbody>
    </table>
  </div>
  <div class="section-block" data-sub="Binary Operations">
    <h2>3.2 Algebraic Structures with Binary Operations</h2>
    <p>A binary operation ∗ on S maps S×S → S. The four axioms below are exactly what you check when classifying an algebraic structure (semigroup, monoid, group…):</p>
    <ul>
      <li><b>Closure</b> — ∀a,b∈S, a∗b∈S.</li>
      <li><b>Associativity</b> — ∀a,b,c∈S, (a∗b)∗c = a∗(b∗c).</li>
      <li><b>Identity element</b> — ∃e∈S s.t. ∀x, x∗e = e∗x = x.</li>
      <li><b>Inverse element</b> — ∀x∈S, ∃x′ s.t. x∗x′ = x′∗x = e.</li>
      <li><b>Distributivity</b> (across two operations ∗, ·) — a∗(b·c) = (a∗b)·(a∗c).</li>
    </ul>
  </div>
  <div class="section-block" data-sub="Graphs & Trees">
    <h2>3.3 Graphs and Trees</h2>
    <div class="def-box"><span class="label">DEFINITIONS</span>
      <p><b>Undirected graph</b> G=(V,E) — non-empty vertex set V, edge set E of unordered pairs.<br>
      <b>Directed graph</b> — edges are ordered pairs (u,v); direction matters.<br>
      <b>deg(v)</b> — number of edges incident to v (a self-loop counts twice).<br>
      <b>Tree</b> — a connected, undirected, acyclic graph.</p></div>
  </div>
  <div class="section-block" data-sub="Key Theorems">
    <h2>3.3.1 Key Graph Theorems</h2>
    <ol>
      <li><b>Handshaking corollary</b> — in any graph, the number of odd-degree vertices is always even.</li>
      <li><b>Tree edge count</b> — a tree on n vertices has exactly n−1 edges.</li>
      <li><b>Path uniqueness</b> — in a tree, there is exactly one simple path between any two distinct vertices.</li>
      <li><b>Minimum connectivity</b> — any connected graph on n vertices needs at least n−1 edges.</li>
    </ol>
  </div>`
},
{
  id:'strings-proofs', num:'04', title:'Strings, Proof Techniques & the General Automaton Model',
  sub:'Alphabets, Kleene closure, string axioms, induction vs. contradiction, and the abstract automaton picture.',
  subnav:['Alphabets & Strings','String Axioms','Proof Methods','General Automaton'],
  html:`
  <div class="section-block" data-sub="Alphabets & Strings">
    <h2>4.1 Alphabets and Strings</h2>
    <ul>
      <li><b>Alphabet Σ</b> — a finite, non-empty set of symbols, e.g. {0,1} or {a,b}.</li>
      <li><b>Empty string Λ (or ε)</b> — the unique length-0 string, |Λ|=0.</li>
      <li><b>Kleene closure Σ*</b> — all finite strings over Σ, including Λ.</li>
      <li><b>Positive closure Σ⁺</b> — Σ* \\ {Λ}.</li>
    </ul>
  </div>
  <div class="section-block" data-sub="String Axioms">
    <h2>4.1.1 String Operations and Axioms</h2>
    <p><b>Concatenation</b> of x,y∈Σ* forms xy, with:</p>
    <ul>
      <li>Associativity: x(yz) = (xy)z</li>
      <li>Identity: xΛ = Λx = x</li>
      <li>Length additivity: |xy| = |x|+|y|</li>
      <li>Cancellation: zx=zy ⇒ x=y, and xz=yz ⇒ x=y</li>
    </ul>
    <p><b>Reversal / transpose x<sup>T</sup></b> is defined inductively: Λ<sup>T</sup>=Λ, (xa)<sup>T</sup>=a·x<sup>T</sup> for a∈Σ.</p>
    <div class="example-box"><span class="label">WORKED EXAMPLE</span><p>(aaabab)<sup>T</sup> = babaaa — reverse the symbol order.</p></div>
  </div>
  <div class="section-block" data-sub="Proof Methods">
    <h2>4.2 Proof Methods</h2>
    <div class="def-box"><span class="label">MATHEMATICAL INDUCTION</span>
      <p>1. Basis: show P(n₀) holds. 2. Inductive hypothesis: assume P(k) holds for arbitrary k≥n₀. 3. Inductive step: show P(k+1) follows.</p></div>
    <div class="def-box"><span class="label">PROOF BY CONTRADICTION</span>
      <p>Assume ¬P, and derive a logical inconsistency R∧¬R — this forces P to be true.</p></div>
  </div>
  <div class="section-block" data-sub="General Automaton">
    <h2>4.3 The General Automaton Model</h2>
    <p>An automaton is an abstract system that processes a discrete input sequence x∈Σ* over time steps t₁, t₂, … through a finite-state control, producing an output sequence. Every finite automaton you study next (DFA, NFA) is a concrete instance of this abstract model.</p>
  </div>`
},
{
  id:'finite-automata', num:'05', title:'Finite Automata: DFA, NFA & Conversions',
  sub:'The formal 5-tuple, δ vs δ̂, DFA/NFA equivalence, and full subset-construction walkthroughs for both worked examples.',
  subnav:['5-Tuple Definition','DFA vs NFA','Extended δ̂','Case 1: Binary','Case 2: {a,b}'],
  html:`
  <div class="section-block" data-sub="5-Tuple Definition">
    <h2>5.1 Formal Definition</h2>
    <div class="def-box"><span class="label">A FINITE AUTOMATON IS A 5-TUPLE</span>
      <p class="formula">M = (Q, Σ, δ, q₀, F)</p>
      <p>Q — finite non-empty set of states · Σ — finite input alphabet · δ — transition function · q₀∈Q — start state · F⊆Q — accepting states.</p></div>
  </div>
  <div class="section-block" data-sub="DFA vs NFA">
    <h2>5.2 Deterministic vs. Non-Deterministic</h2>
    <table class="data-table wide">
      <thead><tr><th style="width:20%"></th><th>DFA</th><th>NFA</th></tr></thead>
      <tbody>
        <tr><td>Transition</td><td class="formula">δ: Q×Σ → Q</td><td class="formula">δ: Q×Σ → 2<sup>Q</sup></td></tr>
        <tr><td>Meaning</td><td>Exactly one next state, always</td><td>Zero, one, or many next states allowed</td></tr>
      </tbody>
    </table>
    <p><b>Equivalence theorem:</b> DFAs and NFAs recognise exactly the same class of languages. Any NFA can be converted into an equivalent DFA using the <b>subset construction</b> algorithm.</p>
  </div>
  <div class="section-block" data-sub="Extended δ̂">
    <h2>5.3 Extended Transition Function δ̂</h2>
    <p class="formula">δ̂(q, Λ) = q<br>δ̂(q, aw) = δ̂(δ(q,a), w)&nbsp; for a∈Σ, w∈Σ*</p>
    <p>A string w is <b>accepted</b> by M iff δ̂(q₀, w) ∈ F.</p>
  </div>
  <div class="section-block" data-sub="Case 1: Binary">
    <h2>5.4.1 Subset Construction — Case 1, Σ = {0,1}</h2>
    <p>NFA M = ({q0,q1}, {0,1}, δ, q0, {q0}) with:</p>
    <p class="formula">δ(q0,0)=q0 &nbsp; δ(q0,1)=q1 &nbsp; δ(q1,0)=q1 &nbsp; δ(q1,1)={q0,q1}</p>
    <table class="data-table wide">
      <thead><tr><th>DFA composite state</th><th>Input 0</th><th>Input 1</th></tr></thead>
      <tbody>
        <tr><td class="hl">→ * [q0]</td><td>[q0]</td><td>[q1]</td></tr>
        <tr><td>[q1]</td><td>[q1]</td><td>[q0,q1]</td></tr>
        <tr><td class="hl">* [q0,q1]</td><td>[q0,q1]</td><td>[q0,q1]</td></tr>
      </tbody>
    </table>
    <p>Final states are every composite subset that still contains q0: F<sub>DFA</sub> = {[q0], [q0,q1]}. Try this exact machine in the <b>Simulator</b> tab.</p>
  </div>
  <div class="section-block" data-sub="Case 2: {a,b}">
    <h2>5.4.2 Subset Construction — Case 2, Σ = {a,b}</h2>
    <p>NFA M = ({q0,q1,q2}, {a,b}, δ, q0, {q0}) with:</p>
    <p class="formula">δ(q0,a)={q0,q1} &nbsp; δ(q0,b)={q2}<br>δ(q1,a)={q0} &nbsp; δ(q1,b)={q1}<br>δ(q2,a)=∅ &nbsp; δ(q2,b)={q0}</p>
    <table class="data-table wide">
      <thead><tr><th>DFA composite state</th><th>Input a</th><th>Input b</th></tr></thead>
      <tbody>
        <tr><td class="hl">→ * [q0]</td><td>[q0,q1]</td><td>[q2]</td></tr>
        <tr><td>[q2]</td><td>∅</td><td>[q0]</td></tr>
        <tr><td class="hl">* [q0,q1]</td><td>[q0,q1]</td><td>[q1,q2]</td></tr>
        <tr><td>[q1,q2]</td><td>[q0]</td><td>[q0,q1]</td></tr>
        <tr><td>∅ (trap)</td><td>∅</td><td>∅</td></tr>
      </tbody>
    </table>
    <p>Final states: F<sub>DFA</sub> = {[q0], [q0,q1]} — every composite state containing q0. The trap state ∅ absorbs the dead branch once q2 reads a.</p>
  </div>`
}
];

/* =========================================================
   2. QUIZ BANK
   ========================================================= */
const QUIZ = {
'prop-logic':[
 {q:"P ⇒ Q is false in exactly which single row of the truth table?",opts:["P=T, Q=T","P=T, Q=F","P=F, Q=T","P=F, Q=F"],a:1,e:"Implication is false only when the antecedent is true and the consequent is false — T⇒F."},
 {q:"Which law justifies rewriting (P∧Q)∨(P∧¬Q) as P∧(Q∨¬Q)?",opts:["Associative Law","Distributive Law","Absorption Law","De Morgan's Law"],a:1,e:"P∧(Q∨¬Q) factors P out of both terms — that's the Distributive Law applied in reverse."},
 {q:"¬(P∨Q) is logically equivalent to:",opts:["¬P∨¬Q","¬P∧¬Q","P∧Q","P∨Q"],a:1,e:"De Morgan's Law: ¬(P∨Q) ≡ ¬P∧¬Q."},
 {q:"A formula that is false under every truth assignment is called a:",opts:["Tautology","Contingency","Contradiction","WFF"],a:2,e:"By definition, a contradiction evaluates to F for every possible assignment."},
 {q:"α = (P∨Q)∧(P⇒Q)∧(Q⇒P) is logically equivalent to:",opts:["P∨Q","P∧Q","¬P∧¬Q","P⇔Q"],a:1,e:"Checking the truth table, α is true only when both P and Q are true — i.e. α ≡ P∧Q."},
 {q:"In a formula built from n propositional variables, how many distinct boolean functions exist?",opts:["2n","n²","2^n","2^(2^n)"],a:3,e:"Each of the 2ⁿ rows can independently be T or F, giving 2^(2ⁿ) distinct functions."},
 {q:"Which identity is the 'Reductive Identity' listed in the standard table?",opts:["(P⇒Q)∧(P⇒¬Q) ≡ ¬P","P⇒Q ≡ ¬Q⇒¬P","P⇒Q ≡ ¬P∨Q","P∨(P∧Q) ≡ P"],a:0,e:"(P⇒Q)∧(P⇒¬Q) ≡ ¬P is the Reductive Identity — if P forces both Q and ¬Q, P itself must be false."},
 {q:"In PDNF, each elementary product must contain:",opts:["At least one variable","Only uncomplemented variables","Every variable exactly once, complemented or not","No repeated literals across products"],a:2,e:"Principal DNF requires every variable to appear exactly once (either as itself or negated) in every product term."}
],
'predicate-logic':[
 {q:"∀x P(x) means:",opts:["P holds for at least one x","P holds for exactly one x","P holds for every x in the domain","P never holds"],a:2,e:"The universal quantifier ∀ asserts the property for all elements of the domain."},
 {q:"In Derivation 1, which rule produces (P∨Q)⇒S from (P∨Q)⇒R and R⇒S?",opts:["Modus Ponens","Modus Tollens","Hypothetical Syllogism","Conjunctive Simplification"],a:2,e:"Chaining two implications A⇒B and B⇒C into A⇒C is Hypothetical Syllogism."},
 {q:"Given ¬S and (P∨Q)⇒S, which rule concludes ¬(P∨Q)?",opts:["Modus Tollens","Modus Ponens","Universal Instantiation","De Morgan's Law"],a:0,e:"From A⇒B and ¬B, Modus Tollens concludes ¬A."},
 {q:"¬(P∨Q) is converted to ¬P∧¬Q using:",opts:["Distributive Law","De Morgan's Law","Absorption Law","Contrapositive"],a:1,e:"De Morgan's Law directly converts a negated disjunction into a conjunction of negations."},
 {q:"From ¬P∧¬Q, which rule extracts ¬Q alone?",opts:["Universal Instantiation","Modus Ponens","Conjunctive Simplification","Hypothetical Syllogism"],a:2,e:"Conjunctive Simplification: from A∧B you may conclude either A or B individually."},
 {q:"In Derivation 2, going from ∀x(G(x)⇒E(x)) to G(R)⇒E(R) is an application of:",opts:["Existential Generalization","Universal Instantiation","Modus Tollens","De Morgan's Law"],a:1,e:"Universal Instantiation lets you substitute a specific object (R) for the universally quantified variable."},
 {q:"Given G(R)⇒E(R) and G(R), the conclusion E(R) follows by:",opts:["Modus Tollens","Modus Ponens","Hypothetical Syllogism","Simplification"],a:1,e:"Modus Ponens: from A⇒B and A, conclude B."}
],
'sets-graphs':[
 {q:"A∪B is formally defined as:",opts:["{x | x∈A ∧ x∈B}","{x | x∈A ∨ x∈B}","{x | x∈A ∧ x∉B}","{x | x∉A ∧ x∉B}"],a:1,e:"Union collects elements that are in A or in B (inclusive or)."},
 {q:"Which of the following is NOT one of the four binary-operation axioms discussed?",opts:["Closure","Associativity","Commutativity","Identity element"],a:2,e:"The notes list Closure, Associativity, Identity element and Inverse element (plus Distributivity across two operations) — commutativity is not among the four core axioms given."},
 {q:"By the Handshaking corollary, the number of odd-degree vertices in any graph is:",opts:["Always odd","Always even","Always equal to |E|","Always equal to |V|"],a:1,e:"The Handshaking Lemma's corollary: odd-degree vertices always occur in even numbers."},
 {q:"A tree with 12 vertices has exactly how many edges?",opts:["11","12","13","24"],a:0,e:"Tree Edge Count theorem: a tree with n vertices has n−1 edges → 12−1 = 11."},
 {q:"Between any two distinct vertices of a tree, how many simple paths exist?",opts:["Zero","Exactly one","At least two","Depends on the tree"],a:1,e:"Path Uniqueness: trees have exactly one simple path between any pair of distinct vertices."},
 {q:"A self-loop at vertex v contributes how much to deg(v)?",opts:["0","1","2","Depends on direction"],a:2,e:"A self-loop is counted twice toward the degree of its vertex."},
 {q:"What is the minimum number of edges required to keep a connected graph on n vertices connected?",opts:["n","n−1","n+1","2n"],a:1,e:"Minimum Connectivity: a connected graph on n vertices needs at least n−1 edges (achieved exactly by a tree)."}
],
'strings-proofs':[
 {q:"Σ⁺ is defined as:",opts:["Σ* ∪ {Λ}","Σ* \\ {Λ}","Σ* × Σ*","{Λ}"],a:1,e:"Positive closure excludes only the empty string from the Kleene closure: Σ⁺ = Σ*\\{Λ}."},
 {q:"What is |xy| in terms of |x| and |y|?",opts:["|x|·|y|","|x|+|y|","max(|x|,|y|)","|x|−|y|"],a:1,e:"Length Additivity: concatenation adds string lengths."},
 {q:"The reversal of 'aaabab' is:",opts:["bababaa","babaaa","aaabab","ababaa"],a:1,e:"Reverse the symbol order of aaabab to get babaaa, matching the worked example."},
 {q:"Which cancellation law is valid for strings?",opts:["zx=zy ⇒ x=y","xz=zy ⇒ x=y always","zx=yz ⇒ x=y always","None; strings cannot be cancelled"],a:0,e:"Both zx=zy⇒x=y and xz=yz⇒x=y are valid cancellation laws — left/right cancellation on the same side."},
 {q:"In a proof by contradiction, you assume:",opts:["P is true and derive P","¬P is true and derive a contradiction R∧¬R","P(k) is true and derive P(k+1)","Nothing; you just test cases"],a:1,e:"Proof by contradiction assumes the negation of the goal and derives an impossibility."},
 {q:"The inductive step of mathematical induction requires you to show:",opts:["P(n₀) is true","P(k) is false for some k","P(k+1) follows from the assumption that P(k) holds","P holds for a random n"],a:2,e:"The inductive step derives P(k+1) from the inductive hypothesis P(k)."},
 {q:"The general automaton model processes its input:",opts:["All at once, with no time structure","As a discrete sequence over time steps via finite-state control","Only in continuous time","Only for binary alphabets"],a:1,e:"The abstract automaton model reads a discrete input sequence over distinct time intervals through a finite-state control."}
],
'finite-automata':[
 {q:"A finite automaton is formally the 5-tuple:",opts:["(Q, Σ, δ, F, q0)","(Q, Σ, δ, q0, F)","(Σ, Q, q0, F, δ)","(Q, δ, Σ, q0, F, Λ)"],a:1,e:"Standard order: M = (Q, Σ, δ, q0, F) — states, alphabet, transition function, start state, accepting states."},
 {q:"What distinguishes an NFA's transition function from a DFA's?",opts:["NFA has no start state","NFA maps to a set of possible next states (2^Q)","NFA cannot have accepting states","NFA only works on Σ={0,1}"],a:1,e:"δ: Q×Σ → 2^Q for an NFA, versus δ: Q×Σ → Q for a DFA."},
 {q:"δ̂(q, aw) is recursively defined as:",opts:["δ̂(δ(q,a), w)","δ(δ̂(q,w), a)","δ̂(q,a)·δ̂(q,w)","δ(q,a) ∧ δ(q,w)"],a:0,e:"You consume the first symbol a via δ, then recurse δ̂ on the remaining string w."},
 {q:"A string w is accepted by M iff:",opts:["δ̂(q0,w) = q0","δ̂(q0,w) ∈ F","δ(q0,w) is undefined","w = Λ"],a:1,e:"Acceptance requires the extended transition on the full string to land in an accepting state."},
 {q:"In the Case 1 binary NFA, which composite DFA states are accepting?",opts:["Only [q0]","Only [q1]","[q0] and [q0,q1]","[q1] and [q0,q1]"],a:2,e:"Final states of the constructed DFA are exactly the subsets that contain q0: {[q0], [q0,q1]}."},
 {q:"In the Case 2 {a,b} NFA, what does the DFA state ∅ represent?",opts:["The start state","An accepting trap for all valid strings","A dead/trap state with no accepting continuation","An error in the automaton"],a:2,e:"∅ is the trap state reached once every branch of nondeterminism has died out — it can never reach an accepting state again."},
 {q:"The Equivalence Theorem for DFA and NFA states that:",opts:["NFAs are strictly more powerful than DFAs","DFAs are strictly more powerful than NFAs","They recognise exactly the same class of languages","Neither can recognise regular languages"],a:2,e:"Despite the flexibility of nondeterminism, NFAs and DFAs are equivalent in recognition power — subset construction proves it constructively."},
 {q:"In subset construction, a DFA state is marked accepting when:",opts:["It equals q0 exactly","The corresponding NFA subset is empty","The corresponding subset contains at least one NFA accepting state","It has a self-loop"],a:2,e:"A composite/subset state is final in the DFA iff it intersects the NFA's set of accepting states."}
]
};

/* =========================================================
   3. FLASHCARDS
   ========================================================= */
const FLASHCARDS = [
 {id:'f1', topic:'prop-logic', term:'Proposition', definition:'A declarative statement that is strictly true or false, never both.'},
 {id:'f2', topic:'prop-logic', term:'Negation ¬', definition:'Flips the truth value of a proposition: ¬P is true iff P is false.'},
 {id:'f3', topic:'prop-logic', term:'Implication ⇒', definition:'False only when the antecedent is true and the consequent is false (T⇒F).'},
 {id:'f4', topic:'prop-logic', term:'Tautology', definition:'A formula that is true under every possible truth assignment.'},
 {id:'f5', topic:'prop-logic', term:'Contradiction', definition:'A formula that is false under every possible truth assignment.'},
 {id:'f6', topic:'prop-logic', term:'Logical Equivalence ≡', definition:'α ≡ β holds exactly when (α⇔β) is a tautology.'},
 {id:'f7', topic:'prop-logic', term:"De Morgan's Laws", definition:'¬(P∨Q) ≡ ¬P∧¬Q, and ¬(P∧Q) ≡ ¬P∨¬Q.'},
 {id:'f8', topic:'prop-logic', term:'PDNF', definition:'Principal DNF — every elementary product contains every variable exactly once, complemented or not.'},
 {id:'f9', topic:'predicate-logic', term:'Universal Quantifier ∀', definition:'∀x P(x) asserts P holds for every element x in the domain.'},
 {id:'f10', topic:'predicate-logic', term:'Existential Quantifier ∃', definition:'∃x P(x) asserts P holds for at least one element x.'},
 {id:'f11', topic:'predicate-logic', term:'Modus Ponens', definition:'From A⇒B and A, conclude B.'},
 {id:'f12', topic:'predicate-logic', term:'Modus Tollens', definition:'From A⇒B and ¬B, conclude ¬A.'},
 {id:'f13', topic:'predicate-logic', term:'Hypothetical Syllogism', definition:'From A⇒B and B⇒C, conclude A⇒C.'},
 {id:'f14', topic:'predicate-logic', term:'Universal Instantiation', definition:'From ∀x P(x), conclude P(a) for a specific object a.'},
 {id:'f15', topic:'sets-graphs', term:'Union A∪B', definition:'{x | x∈A ∨ x∈B} — elements in A or B or both.'},
 {id:'f16', topic:'sets-graphs', term:'Intersection A∩B', definition:'{x | x∈A ∧ x∈B} — elements in both A and B.'},
 {id:'f17', topic:'sets-graphs', term:'deg(v)', definition:'The number of edges incident to vertex v; a self-loop counts twice.'},
 {id:'f18', topic:'sets-graphs', term:'Tree', definition:'A connected, undirected, acyclic graph.'},
 {id:'f19', topic:'sets-graphs', term:'Handshaking Corollary', definition:'The number of odd-degree vertices in any graph is always even.'},
 {id:'f20', topic:'sets-graphs', term:'Tree Edge Count', definition:'A tree with n vertices has exactly n−1 edges.'},
 {id:'f21', topic:'strings-proofs', term:'Kleene Closure Σ*', definition:'The set of all finite strings over Σ, including the empty string Λ.'},
 {id:'f22', topic:'strings-proofs', term:'Positive Closure Σ⁺', definition:'Σ* with the empty string removed: Σ⁺ = Σ* \\ {Λ}.'},
 {id:'f23', topic:'strings-proofs', term:'String Reversal xᵀ', definition:'Defined inductively: Λᵀ=Λ, (xa)ᵀ = a·xᵀ — reverses the symbol order.'},
 {id:'f24', topic:'strings-proofs', term:'Proof by Induction', definition:'Basis step, inductive hypothesis P(k), then inductive step showing P(k+1).'},
 {id:'f25', topic:'strings-proofs', term:'Proof by Contradiction', definition:'Assume ¬P is true and derive a logical inconsistency R∧¬R.'},
 {id:'f26', topic:'finite-automata', term:'Finite Automaton', definition:'A 5-tuple M = (Q, Σ, δ, q0, F): states, alphabet, transition function, start state, accepting states.'},
 {id:'f27', topic:'finite-automata', term:'DFA transition', definition:'δ: Q×Σ → Q — exactly one next state for every state/symbol pair.'},
 {id:'f28', topic:'finite-automata', term:'NFA transition', definition:'δ: Q×Σ → 2^Q — zero, one, or many next states allowed.'},
 {id:'f29', topic:'finite-automata', term:'Extended transition δ̂', definition:'δ̂(q,Λ)=q; δ̂(q,aw)=δ̂(δ(q,a),w) — recursively consumes symbols.'},
 {id:'f30', topic:'finite-automata', term:'Subset Construction', definition:'The algorithm that converts any NFA into an equivalent DFA over composite (subset) states.'},
 {id:'f31', topic:'finite-automata', term:'DFA/NFA Equivalence Theorem', definition:'DFAs and NFAs recognise exactly the same class of languages.'}
];

/* =========================================================
   4. AUTOMATON PRESETS
   ========================================================= */
const AUTOMATA = {
  bin:{ name:'Binary NFA — Σ={0,1}', type:'NFA', states:['q0','q1'], alphabet:['0','1'], start:'q0', accept:['q0'],
    trans:{ q0:{'0':['q0'], '1':['q1']}, q1:{'0':['q1'], '1':['q0','q1']} },
    lang:'From the notes §5.4.1. Accepts Λ and any string not ending in a lone unmatched "1" chain — formally, every string that keeps at least one active branch back at q0.',
    tests:[{s:'',a:true},{s:'0110',a:true},{s:'1',a:false},{s:'11',a:true},{s:'101',a:false}] },
  ab:{ name:'{a,b} NFA — 3 states', type:'NFA', states:['q0','q1','q2'], alphabet:['a','b'], start:'q0', accept:['q0'],
    trans:{ q0:{'a':['q0','q1'], 'b':['q2']}, q1:{'a':['q0'], 'b':['q1']}, q2:{'a':[], 'b':['q0']} },
    lang:'From the notes §5.4.2. A 3-state NFA over {a,b} where q2 has no outgoing "a" transition — reading "a" from q2 kills that branch.',
    tests:[{s:'',a:true},{s:'aa',a:true},{s:'b',a:false},{s:'bb',a:true},{s:'ba',a:false}] },
  even0:{ name:'Even number of 0s', type:'DFA', states:['E','O'], alphabet:['0','1'], start:'E', accept:['E'],
    trans:{ E:{'0':'O','1':'E'}, O:{'0':'E','1':'O'} },
    lang:'Classic drill DFA: accepts exactly the binary strings containing an even number of 0s (zero counts as even, so Λ is accepted).',
    tests:[{s:'',a:true},{s:'00',a:true},{s:'0',a:false},{s:'010',a:false},{s:'0011',a:true}] },
  endsin01:{ name:'Ends with "01"', type:'DFA', states:['s0','s1','s2'], alphabet:['0','1'], start:'s0', accept:['s2'],
    trans:{ s0:{'0':'s1','1':'s0'}, s1:{'0':'s1','1':'s2'}, s2:{'0':'s1','1':'s0'} },
    lang:'Accepts every binary string whose last two symbols are exactly "0" then "1". Needs at least 2 symbols to accept.',
    tests:[{s:'01',a:true},{s:'1101',a:true},{s:'10',a:false},{s:'011',a:false},{s:'0001',a:true}] },
  containsaba:{ name:'Contains "aba"', type:'NFA', states:['p0','p1','p2','p3'], alphabet:['a','b'], start:'p0', accept:['p3'],
    trans:{ p0:{'a':['p0','p1'], 'b':['p0']}, p1:{'a':['p0'], 'b':['p2']}, p2:{'a':['p3'], 'b':['p0']}, p3:{'a':['p3'], 'b':['p3']} },
    lang:'Accepts any string over {a,b} that contains "aba" as a substring anywhere. p3 is a permanent accepting sink once "aba" has been seen.',
    tests:[{s:'aba',a:true},{s:'bbabaa',a:true},{s:'aabb',a:false},{s:'ababa',a:true},{s:'aa',a:false}] }
};
let CUSTOM_AUTOMATON = null;

/* =========================================================
   5. STATE / STORAGE
   ========================================================= */
const LS_KEY='toc_studio_progress_v2';
function defaultProgress(){
  return { quizzes:{}, quizHistory:[], simRuns:[], flashHistory:[], topicTime:{}, bookmarks:[], activeDates:[] };
}
function loadProgress(){
  try{
    const raw=localStorage.getItem(LS_KEY);
    if(!raw) return defaultProgress();
    const p=JSON.parse(raw);
    return Object.assign(defaultProgress(), p);
  }catch(e){ return defaultProgress(); }
}
function saveProgress(){ try{ localStorage.setItem(LS_KEY, JSON.stringify(progress)); }catch(e){} }
let progress = loadProgress();

function todayStr(){ return new Date().toISOString().slice(0,10); }
function markActiveToday(){
  const t=todayStr();
  if(!progress.activeDates.includes(t)){ progress.activeDates.push(t); if(progress.activeDates.length>200) progress.activeDates.shift(); saveProgress(); }
}
function currentStreak(){
  const set=new Set(progress.activeDates);
  let n=0; let d=new Date();
  if(!set.has(todayStr())){ /* still allow streak counted through yesterday */ }
  while(true){
    const ds=d.toISOString().slice(0,10);
    if(set.has(ds)){ n++; d.setDate(d.getDate()-1); } else break;
  }
  return n;
}
function formatDuration(sec){
  sec=Math.round(sec||0);
  if(sec<60) return sec+'s';
  const m=Math.floor(sec/60), s=sec%60;
  if(m<60) return m+'m '+s+'s';
  const h=Math.floor(m/60), mm=m%60;
  return h+'h '+mm+'m';
}
function pushCapped(arr, item, cap){
  arr.push(item); if(arr.length>cap) arr.splice(0, arr.length-cap);
}

/* =========================================================
   6. TOAST
   ========================================================= */
function showToast(msg){
  const host=document.getElementById('toastHost');
  const el=document.createElement('div'); el.className='toast'; el.textContent=msg;
  host.appendChild(el);
  setTimeout(()=>{ el.style.opacity='0'; el.style.transition='opacity .3s'; setTimeout(()=>el.remove(),300); }, 2200);
}

/* =========================================================
   7. VIEW ROUTING
   ========================================================= */
const views=['home','topic','quiz','flashcards','simulator','analytics'];
function showView(name){
  views.forEach(v=>{ document.getElementById('view-'+v).hidden = (v!==name); });
  document.getElementById('readBar').style.display = (name==='topic') ? 'block' : 'none';
  if(name!=='topic') stopTopicTimer();
  window.scrollTo({top:0});
  closeSidebar();
}
function updateCrumbs(text){ document.getElementById('crumbs').textContent = text; }

/* =========================================================
   8. SIDEBAR NAV
   ========================================================= */
function buildNav(){
  const nav = document.getElementById('navList');
  nav.innerHTML='';
  const addLabel=(txt)=>{ const l=document.createElement('div'); l.className='nav-group-label'; l.textContent=txt; nav.appendChild(l); };
  const addItem=(id, iconName, label, onClick, numTxt)=>{
    const btn=document.createElement('button');
    btn.className='nav-item'; btn.dataset.id=id;
    btn.innerHTML = (numTxt? '<span class="num">'+numTxt+'</span>' : '<span class="ic">'+icon(iconName)+'</span>') +
      '<span>'+label+'</span><span class="dot"></span><span class="star-flag">'+icon('star',12)+'</span>';
    btn.addEventListener('click', onClick);
    nav.appendChild(btn);
    return btn;
  };
  addLabel('OVERVIEW');
  addItem('home','home','Home', openHome);
  addLabel('UNITS');
  TOPICS.forEach(t=> addItem(t.id, null, t.title, ()=>openTopic(t.id), t.num) );
  addLabel('PRACTICE');
  addItem('quiz','quiz','Quiz bank', openQuizHome);
  addItem('flashcards','cards','Flashcards', ()=>openFlashcards());
  addItem('simulator','cpu','Simulator', openSimulator);
  addLabel('YOU');
  addItem('analytics','chart','My progress', openAnalytics);
}
function setActiveNav(id){
  document.querySelectorAll('.nav-item').forEach(el=>{ el.classList.toggle('active', el.dataset.id===id); });
}
function refreshNavMeta(){
  document.querySelectorAll('.nav-item').forEach(el=>el.classList.remove('done','starred'));
  TOPICS.forEach(t=>{
    const el=document.querySelector('.nav-item[data-id="'+t.id+'"]');
    if(!el) return;
    if(progress.quizzes[t.id]) el.classList.add('done');
    if(progress.bookmarks.includes(t.id)) el.classList.add('starred');
  });
}

/* =========================================================
   9. HOME
   ========================================================= */
function totalQuestions(){ return Object.values(QUIZ).reduce((s,a)=>s+a.length,0); }
function topicScorePct(id){ const rec=progress.quizzes[id]; if(!rec) return 0; return Math.round((rec.best/rec.total)*100); }
function overallPct(){ const ids=TOPICS.map(t=>t.id); let sum=0; ids.forEach(id=> sum+=topicScorePct(id)); return Math.round(sum/ids.length); }

function renderHome(){
  document.getElementById('statQ').textContent = totalQuestions();
  document.getElementById('statCards').textContent = FLASHCARDS.length;
  const pct = overallPct();
  document.getElementById('statDone').textContent = pct+'%';

  const grid=document.getElementById('topicGrid');
  grid.innerHTML='';
  TOPICS.forEach(t=>{
    const p=topicScorePct(t.id);
    const starred = progress.bookmarks.includes(t.id);
    const card=document.createElement('div');
    card.className='plate topic-card';
    card.innerHTML='<span class="tnum"><span>UNIT '+t.num+'</span>'+(starred?icon('star',13):'')+'</span>'+
      '<h3>'+t.title+'</h3><p>'+t.sub+'</p>'+
      '<div class="bar-track"><div class="bar-fill" style="width:'+p+'%"></div></div>'+
      '<span class="bar-label">'+(p? p+'% best quiz score':'not attempted yet')+'</span>';
    card.addEventListener('click',()=>openTopic(t.id));
    grid.appendChild(card);
  });

  const tools=document.getElementById('toolGrid');
  tools.innerHTML='';
  const toolDefs=[
    {icon:'quiz', title:'Test yourself', desc:'Topic-wise quizzes plus a mixed mock exam, with worked explanations for every question.', fn:openQuizHome},
    {icon:'cpu', title:'Automaton simulator', desc:'Run strings through DFAs/NFAs, step through transitions, reveal subset construction, or build your own machine.', fn:openSimulator},
    {icon:'cards', title:'Flashcards', desc:'Flip through every key term and definition, unit by unit or all mixed together.', fn:()=>openFlashcards()},
    {icon:'chart', title:'My progress', desc:'Quiz history, simulator runs, study time and streaks — all tracked locally.', fn:openAnalytics}
  ];
  toolDefs.forEach(td=>{
    const card=document.createElement('div');
    card.className='plate topic-card';
    card.innerHTML='<span class="tnum">'+icon(td.icon,15)+'</span><h3>'+td.title+'</h3><p>'+td.desc+'</p>';
    card.addEventListener('click', td.fn);
    tools.appendChild(card);
  });

  refreshNavMeta();
}
function openHome(){ showView('home'); setActiveNav('home'); updateCrumbs('HOME'); renderHome(); }

/* =========================================================
   10. TOPIC VIEW (+ bookmark + reading timer)
   ========================================================= */
let timerInterval=null, timerTopicId=null;
function startTopicTimer(id){
  stopTopicTimer();
  timerTopicId=id;
  document.getElementById('timerPill').classList.add('live');
  timerInterval=setInterval(()=>{
    progress.topicTime[id]=(progress.topicTime[id]||0)+1;
    saveProgress();
    updateTimerDisplay();
  },1000);
}
function stopTopicTimer(){
  if(timerInterval){ clearInterval(timerInterval); timerInterval=null; timerTopicId=null; }
  document.getElementById('timerPill').classList.remove('live');
}
function updateTimerDisplay(){
  const total=Object.values(progress.topicTime||{}).reduce((a,b)=>a+b,0);
  document.getElementById('timerText').textContent = formatDuration(total);
}

function openTopic(id){
  const t = TOPICS.find(x=>x.id===id);
  if(!t) return;
  showView('topic'); setActiveNav(id);
  updateCrumbs('UNIT '+t.num+' · '+t.title.toUpperCase());
  document.getElementById('topicEyebrow').textContent = 'UNIT '+t.num;
  document.getElementById('topicTitle').textContent = t.title;
  document.getElementById('topicSub').textContent = t.sub;
  document.getElementById('topicBody').innerHTML = t.html;

  const starBtn=document.getElementById('topicStar');
  const isStar = progress.bookmarks.includes(id);
  starBtn.innerHTML = icon('star',18);
  starBtn.classList.toggle('on', isStar);
  starBtn.onclick=()=>{
    const idx=progress.bookmarks.indexOf(id);
    if(idx>=0){ progress.bookmarks.splice(idx,1); showToast('Removed bookmark'); }
    else { progress.bookmarks.push(id); showToast('Unit bookmarked'); }
    saveProgress(); refreshNavMeta();
    starBtn.classList.toggle('on', progress.bookmarks.includes(id));
  };

  const subnav = document.getElementById('topicSubnav');
  subnav.innerHTML='';
  t.subnav.forEach(label=>{
    const b=document.createElement('button');
    b.textContent=label;
    b.addEventListener('click',()=>{
      const target=[...document.querySelectorAll('#topicBody .section-block')].find(el=>el.dataset.sub===label);
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
    subnav.appendChild(b);
  });

  const idx=TOPICS.findIndex(x=>x.id===id);
  const prevBtn=document.getElementById('topicPrev');
  prevBtn.disabled = idx<=0;
  prevBtn.onclick=()=>{ if(idx>0) openTopic(TOPICS[idx-1].id); };
  document.getElementById('topicQuizBtn').onclick=()=>startQuiz(id);

  markActiveToday();
  startTopicTimer(id);
  updateTimerDisplay();
}

window.addEventListener('scroll', ()=>{
  if(document.getElementById('view-topic').hidden) return;
  const h=document.documentElement.scrollHeight - window.innerHeight;
  const pct = h>0 ? Math.min(100, Math.round((window.scrollY/h)*100)) : 0;
  const fill=document.getElementById('readBarFill');
  if(fill) fill.style.width=pct+'%';
});

/* =========================================================
   11. QUIZ ENGINE
   ========================================================= */
let quizState=null;
function openQuizHome(){
  stopTopicTimer();
  showView('quiz'); setActiveNav('quiz'); updateCrumbs('QUIZ BANK');
  stageSwitch('quizPickStage');
  const grid=document.getElementById('quizPickGrid');
  grid.innerHTML='';
  TOPICS.forEach(t=>{
    const rec=progress.quizzes[t.id];
    const div=document.createElement('div');
    div.className='plate quiz-pick';
    div.innerHTML='<h4>Unit '+t.num+' · '+t.title+'</h4><span>'+QUIZ[t.id].length+' questions'+(rec?' · best '+rec.best+'/'+rec.total:'')+'</span>';
    div.addEventListener('click',()=>startQuiz(t.id));
    grid.appendChild(div);
  });
  const mock=document.createElement('div');
  mock.className='plate quiz-pick mock';
  mock.innerHTML='<h4>Mixed mock test</h4><span>15 random questions across all 5 units</span>';
  mock.addEventListener('click',()=>startQuiz('mock'));
  grid.appendChild(mock);
  const timed=document.createElement('div');
  timed.className='plate quiz-pick timed';
  timed.innerHTML='<h4>Timed sprint</h4><span>10 random questions, race your own clock</span>';
  timed.addEventListener('click',()=>startQuiz('timed'));
  grid.appendChild(timed);
}
function shuffle(arr){ const a=arr.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const tmp=a[i]; a[i]=a[j]; a[j]=tmp; } return a; }
function startQuiz(id){
  let qs, name, timed=false;
  if(id==='mock'){
    let all=[]; TOPICS.forEach(t=> QUIZ[t.id].forEach(q=>all.push(Object.assign({unit:t.title},q))) );
    qs = shuffle(all).slice(0,15); name='Mixed mock test';
  } else if(id==='timed'){
    let all=[]; TOPICS.forEach(t=> QUIZ[t.id].forEach(q=>all.push(Object.assign({unit:t.title},q))) );
    qs = shuffle(all).slice(0,10); name='Timed sprint'; timed=true;
  } else {
    const t=TOPICS.find(x=>x.id===id);
    qs = QUIZ[id].map(q=>Object.assign({unit:t.title},q));
    name='Unit '+t.num+' · '+t.title;
  }
  quizState={ id, name, qs, i:0, score:0, answered:false, timed, startTs:Date.now(), timerIv:null };
  showView('quiz'); setActiveNav('quiz'); updateCrumbs('QUIZ · '+name.toUpperCase());
  stageSwitch('quizRunStage');
  if(timed){
    if(quizState.timerIv) clearInterval(quizState.timerIv);
    quizState.timerIv=setInterval(()=>{
      const el=document.getElementById('quizTimerText');
      if(el) el.textContent = '⏱ '+formatDuration((Date.now()-quizState.startTs)/1000);
    },500);
  } else {
    document.getElementById('quizTimerText').textContent='';
  }
  renderQuestion();
  markActiveToday();
}
function stageSwitch(id){
  ['quizPickStage','quizRunStage','quizResultStage'].forEach(s=>{ document.getElementById(s).classList.toggle('active', s===id); });
}
function renderQuestion(){
  const st=quizState;
  const q=st.qs[st.i];
  document.getElementById('quizName').textContent = st.name;
  document.getElementById('quizCount').textContent = (st.i+1)+'/'+st.qs.length;
  document.getElementById('quizFill').style.width = Math.round((st.i/st.qs.length)*100)+'%';
  document.getElementById('qTag').textContent = q.unit ? q.unit.toUpperCase() : 'QUESTION';
  document.getElementById('qText').textContent = q.q;
  const optWrap=document.getElementById('qOpts');
  optWrap.innerHTML='';
  const letters=['A','B','C','D','E'];
  q.opts.forEach((opt,idx)=>{
    const b=document.createElement('button');
    b.className='opt'; b.type='button';
    b.innerHTML='<span class="tag">'+letters[idx]+'</span><span>'+opt+'</span>';
    b.addEventListener('click',()=>answerQuestion(idx));
    optWrap.appendChild(b);
  });
  document.getElementById('qExplain').classList.remove('show');
  document.getElementById('qExplain').innerHTML='';
  document.getElementById('quizNext').disabled=true;
  st.answered=false;
}
function answerQuestion(idx){
  const st=quizState;
  if(st.answered) return;
  st.answered=true;
  const q=st.qs[st.i];
  const opts=document.querySelectorAll('#qOpts .opt');
  opts.forEach((el,i)=>{
    el.setAttribute('disabled','true');
    if(i===q.a) el.classList.add('correct');
    else if(i===idx) el.classList.add('wrong');
  });
  if(idx===q.a) st.score++;
  const ex=document.getElementById('qExplain');
  ex.innerHTML = '<b>'+(idx===q.a?'Correct. ':'Not quite. ')+'</b>'+q.e;
  ex.classList.add('show');
  document.getElementById('quizNext').disabled=false;
}
document.getElementById('quizNext').addEventListener('click',()=>{
  const st=quizState;
  st.i++;
  if(st.i>=st.qs.length){ finishQuiz(); } else { renderQuestion(); }
});
document.getElementById('quizQuit').addEventListener('click', ()=>{ if(quizState && quizState.timerIv) clearInterval(quizState.timerIv); openQuizHome(); });
function finishQuiz(){
  const st=quizState;
  if(st.timerIv) clearInterval(st.timerIv);
  stageSwitch('quizResultStage');
  document.getElementById('resultName').textContent = st.name.toUpperCase();
  document.getElementById('resultScore').textContent = st.score+'/'+st.qs.length;
  const pct=Math.round((st.score/st.qs.length)*100);
  const elapsed = (Date.now()-st.startTs)/1000;
  let msg = pct>=80 ? "Excellent — this unit is exam-ready." : pct>=50 ? "Solid, but revisit the missed concepts before the exam." : "Worth another pass through the unit notes before retrying.";
  if(st.timed) msg += ' Completed in '+formatDuration(elapsed)+'.';
  document.getElementById('resultMsg').textContent = msg;
  if(st.id!=='mock' && st.id!=='timed'){
    const rec=progress.quizzes[st.id]||{best:0,total:st.qs.length};
    rec.best = Math.max(rec.best, st.score); rec.total = st.qs.length;
    progress.quizzes[st.id]=rec;
  }
  pushCapped(progress.quizHistory, {name:st.name, score:st.score, total:st.qs.length, pct, ts:Date.now()}, 60);
  saveProgress();
  document.getElementById('resultRetry').onclick=()=>startQuiz(st.id);
  document.getElementById('resultBack').onclick=openQuizHome;
}

/* =========================================================
   12. FLASHCARDS ENGINE
   ========================================================= */
let flashState=null;
function openFlashcards(unitId){
  stopTopicTimer();
  showView('flashcards'); setActiveNav('flashcards'); updateCrumbs('FLASHCARDS');
  const sel=document.getElementById('flashUnitSelect');
  if(sel.options.length===0){
    const optAll=document.createElement('option'); optAll.value='all'; optAll.textContent='All units mixed'; sel.appendChild(optAll);
    TOPICS.forEach(t=>{ const o=document.createElement('option'); o.value=t.id; o.textContent='Unit '+t.num+' · '+t.title; sel.appendChild(o); });
  }
  sel.value = unitId || 'all';
  sel.onchange = ()=> buildFlashDeck(sel.value);
  buildFlashDeck(sel.value);
  markActiveToday();
}
function buildFlashDeck(unitId){
  let cards = unitId==='all' ? FLASHCARDS.slice() : FLASHCARDS.filter(c=>c.topic===unitId);
  cards = shuffle(cards);
  flashState = { cards, i:0, known:0, review:0, flipped:false };
  renderFlashcard();
}
document.getElementById('flashShuffle').addEventListener('click', ()=>{ if(flashState){ flashState.cards=shuffle(flashState.cards); flashState.i=0; renderFlashcard(); } });
document.getElementById('flashRestart').addEventListener('click', ()=>{ if(flashState){ flashState.i=0; flashState.known=0; flashState.review=0; renderFlashcard(); } });
function renderFlashcard(){
  const stage=document.getElementById('flashStage');
  const st=flashState;
  if(!st || st.cards.length===0){ stage.innerHTML='<div class="flash-empty">No flashcards in this set.</div>'; return; }
  if(st.i>=st.cards.length){
    stage.innerHTML = '<div class="flash-empty"><b style="font-family:var(--serif); font-size:20px; color:var(--ink); display:block; margin-bottom:8px;">Deck complete</b>'+
      'Knew '+st.known+' · reviewing '+st.review+' again.<br><br>'+
      '<button class="btn accent" id="flashDone">Restart deck</button></div>';
    document.getElementById('flashDone').addEventListener('click', ()=>{ st.i=0; st.known=0; st.review=0; renderFlashcard(); });
    return;
  }
  const c=st.cards[st.i];
  const t=TOPICS.find(x=>x.id===c.topic);
  stage.innerHTML =
    '<span class="flash-count">Card '+(st.i+1)+' of '+st.cards.length+' &middot; '+(t?t.title:'')+'</span>'+
    '<div class="flash-card" id="flashCard">'+
      '<div class="flash-card-inner">'+
        '<div class="flash-face front"><span class="tag">TERM</span><h3>'+c.term+'</h3><span class="flash-hint">Tap to reveal definition</span></div>'+
        '<div class="flash-face back"><span class="tag">DEFINITION</span><p>'+c.definition+'</p></div>'+
      '</div>'+
    '</div>'+
    '<div class="flash-verdict-row" id="flashVerdictRow" style="display:none;">'+
      '<button class="btn review" id="flashReview">Review again</button>'+
      '<button class="btn know" id="flashKnow">I knew this</button>'+
    '</div>';
  const cardEl=document.getElementById('flashCard');
  cardEl.addEventListener('click', ()=>{
    cardEl.classList.toggle('flipped');
    document.getElementById('flashVerdictRow').style.display = cardEl.classList.contains('flipped') ? 'flex' : 'none';
  });
  document.getElementById('flashKnow').addEventListener('click',(e)=>{ e.stopPropagation(); recordFlash(c.id,'know'); });
  document.getElementById('flashReview').addEventListener('click',(e)=>{ e.stopPropagation(); recordFlash(c.id,'review'); });
}
function recordFlash(id, verdict){
  const st=flashState;
  if(verdict==='know') st.known++; else st.review++;
  pushCapped(progress.flashHistory, {id, verdict, ts:Date.now()}, 200);
  saveProgress();
  st.i++;
  renderFlashcard();
}

/* =========================================================
   13. SIMULATOR
   ========================================================= */
let simState=null;
function cloneAutomaton(a){ return JSON.parse(JSON.stringify(a)); }

function nfaToDfa(nfa){
  const startSet=[nfa.start].sort();
  const key=s=>s.join(',');
  const seen={}; const queue=[startSet]; seen[key(startSet)]=startSet;
  const dfaStates=[]; const dfaTrans={}; const dfaAccept=[];
  while(queue.length){
    const cur=queue.shift();
    const k=key(cur);
    dfaStates.push(cur);
    dfaTrans[k]={};
    if(cur.some(s=>nfa.accept.includes(s))) dfaAccept.push(k);
    nfa.alphabet.forEach(sym=>{
      let next=new Set();
      cur.forEach(s=>{ ((nfa.trans[s]||{})[sym]||[]).forEach(x=>next.add(x)); });
      const nextArr=[...next].sort();
      const nk=key(nextArr);
      dfaTrans[k][sym]=nextArr;
      if(!(nk in seen)){ seen[nk]=nextArr; queue.push(nextArr); }
    });
  }
  return {dfaStates, dfaTrans, dfaAccept, key};
}
function renderDfaTable(nfa){
  if(nfa.type==='DFA'){
    let html='<p style="font-size:12.5px;color:var(--ink-faint);">This machine is already deterministic — no subset construction needed.</p>';
    html+='<table class="data-table wide"><thead><tr><th>State</th>';
    nfa.alphabet.forEach(sym=> html+='<th>Input '+sym+'</th>');
    html+='</tr></thead><tbody>';
    nfa.states.forEach(s=>{
      const isStart=s===nfa.start, isAccept=nfa.accept.includes(s);
      html+='<tr><td class="'+(isAccept?'hl':'')+'">'+(isStart?'&rarr; ':'')+(isAccept?'* ':'')+s+'</td>';
      nfa.alphabet.forEach(sym=>{ html+='<td>'+(nfa.trans[s][sym]||'&mdash;')+'</td>'; });
      html+='</tr>';
    });
    html+='</tbody></table>';
    return html;
  }
  const {dfaStates, dfaTrans, dfaAccept, key} = nfaToDfa(nfa);
  const fmt=arr=> arr.length? '['+arr.join(',')+']' : '&empty;';
  let html='<table class="data-table wide"><thead><tr><th>Composite state</th>';
  nfa.alphabet.forEach(sym=> html+='<th>Input '+sym+'</th>');
  html+='</tr></thead><tbody>';
  dfaStates.forEach(st=>{
    const k=key(st);
    const isStart = k===key([nfa.start].sort());
    const isAccept = dfaAccept.includes(k);
    html+='<tr><td class="'+(isAccept?'hl':'')+'">'+(isStart?'&rarr; ':'')+(isAccept?'* ':'')+fmt(st)+'</td>';
    nfa.alphabet.forEach(sym=>{ html+='<td>'+fmt(dfaTrans[k][sym])+'</td>'; });
    html+='</tr>';
  });
  html+='</tbody></table>';
  return html;
}
function layoutPositions(states, cx, cy, r){
  const n=states.length; const pos={};
  states.forEach((s,i)=>{ const angle=-Math.PI/2 + i*(2*Math.PI/n); pos[s]={x:cx+r*Math.cos(angle), y:cy+r*Math.sin(angle)}; });
  return pos;
}
function svgEl(tag, attrs){
  const el=document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,v));
  return el;
}
function drawAutomaton(automaton, activeSet){
  const svg=document.getElementById('simSvg');
  svg.innerHTML='';
  const W=560,H=340, cx=W/2, cy=H/2+10, r=Math.min(140, 60+automaton.states.length*14);
  const pos=layoutPositions(automaton.states, cx, cy, r);
  const NODE_R=28;
  const defs=svgEl('defs',{});
  const marker=svgEl('marker',{id:'arrow',viewBox:'0 0 10 10',refX:'9',refY:'5',markerWidth:'7',markerHeight:'7',orient:'auto-start-reverse'});
  marker.appendChild(svgEl('path',{d:'M0,0 L10,5 L0,10 z', fill:'var(--ink-soft)'}));
  defs.appendChild(marker); svg.appendChild(defs);

  const edgeGroups={};
  automaton.states.forEach(s=>{
    const symMap = automaton.trans[s] || {};
    Object.entries(symMap).forEach(([sym, targets])=>{
      const arr = Array.isArray(targets) ? targets : (targets? [targets]:[]);
      arr.forEach(t=>{
        const k=s+'>>'+t;
        edgeGroups[k]=edgeGroups[k]||{from:s,to:t,syms:[]};
        edgeGroups[k].syms.push(sym);
      });
    });
  });
  Object.values(edgeGroups).forEach(edge=>{
    const p1=pos[edge.from], p2=pos[edge.to];
    if(!p1||!p2) return;
    if(edge.from===edge.to){
      const lx=p1.x, ly=p1.y-NODE_R;
      const path=svgEl('path',{ d:'M '+(lx-16)+' '+ly+' C '+(lx-22)+' '+(ly-38)+', '+(lx+22)+' '+(ly-38)+', '+(lx+16)+' '+ly,
        fill:'none', stroke:'var(--ink-soft)', 'stroke-width':'1.6', 'marker-end':'url(#arrow)' });
      svg.appendChild(path);
      const label=svgEl('text',{x:lx, y:ly-40, 'text-anchor':'middle'});
      label.textContent=edge.syms.join(','); label.setAttribute('font-family','var(--mono)'); label.setAttribute('font-size','12'); label.setAttribute('fill','var(--ink-soft)');
      svg.appendChild(label);
    } else {
      const dx=p2.x-p1.x, dy=p2.y-p1.y; const dist=Math.sqrt(dx*dx+dy*dy)||1;
      const ux=dx/dist, uy=dy/dist;
      const sx=p1.x+ux*NODE_R, sy=p1.y+uy*NODE_R;
      const ex=p2.x-ux*NODE_R, ey=p2.y-uy*NODE_R;
      const reverseExists = edgeGroups[edge.to+'>>'+edge.from];
      const curve = reverseExists ? 22 : 0;
      const mx=(sx+ex)/2 - uy*curve, my=(sy+ey)/2 + ux*curve;
      const path=svgEl('path',{ d:'M '+sx+' '+sy+' Q '+mx+' '+my+' '+ex+' '+ey,
        fill:'none', stroke:'var(--ink-soft)', 'stroke-width':'1.6', 'marker-end':'url(#arrow)' });
      svg.appendChild(path);
      const label=svgEl('text',{x:mx, y:my-6, 'text-anchor':'middle'});
      label.textContent=edge.syms.join(','); label.setAttribute('font-family','var(--mono)'); label.setAttribute('font-size','12'); label.setAttribute('fill','var(--ink-soft)');
      svg.appendChild(label);
    }
  });
  const startPos=pos[automaton.start];
  if(startPos){
    const sax = startPos.x - NODE_R - 30, say = startPos.y;
    svg.appendChild(svgEl('path',{ d:'M '+sax+' '+say+' L '+(startPos.x-NODE_R)+' '+say, stroke:'var(--ink)', 'stroke-width':'1.8', 'marker-end':'url(#arrow)'}));
    const startLabel=svgEl('text',{x:sax-6, y:say+4, 'text-anchor':'end'});
    startLabel.textContent='start'; startLabel.setAttribute('font-family','var(--mono)'); startLabel.setAttribute('font-size','11'); startLabel.setAttribute('fill','var(--ink-faint)');
    svg.appendChild(startLabel);
  }
  automaton.states.forEach(s=>{
    const p=pos[s]; if(!p) return;
    const isAccept = automaton.accept.includes(s);
    const isActive = activeSet && activeSet.includes(s);
    if(isAccept) svg.appendChild(svgEl('circle',{cx:p.x,cy:p.y,r:NODE_R+5, fill:'none', stroke:'var(--ink)', 'stroke-width':'1.4'}));
    svg.appendChild(svgEl('circle',{cx:p.x,cy:p.y,r:NODE_R, fill: isActive?'var(--accent)':'var(--surface)', stroke: isActive?'var(--accent)':'var(--ink)', 'stroke-width':'1.8'}));
    const text=svgEl('text',{x:p.x,y:p.y+5,'text-anchor':'middle'});
    text.textContent=s; text.setAttribute('font-family','var(--mono)'); text.setAttribute('font-size','14'); text.setAttribute('font-weight','600');
    text.setAttribute('fill', isActive? '#fff':'var(--ink)');
    svg.appendChild(text);
  });
}

function currentAutomaton(){ return simState ? simState.automaton : null; }

function openSimulator(){
  stopTopicTimer();
  showView('simulator'); setActiveNav('simulator'); updateCrumbs('AUTOMATON SIMULATOR');
  document.getElementById('tabPreset').classList.add('active');
  document.getElementById('tabBuilder').classList.remove('active');
  document.getElementById('builderPanel').style.display='none';
  document.getElementById('presetSelectField').style.display='block';
  const sel=document.getElementById('simMachine');
  resetSimulator(sel.value);
  markActiveToday();
}
function populateQuickChips(automaton){
  const host=document.getElementById('quickChips');
  host.innerHTML='';
  const tests = automaton.tests || [];
  tests.forEach(t=>{
    const chip=document.createElement('button');
    chip.type='button';
    chip.className='quick-chip '+(t.a?'acc':'rej');
    chip.textContent=(t.s===''?'Λ':t.s)+' '+(t.a?'✓':'✗');
    chip.title = t.a ? 'Expected: accepted' : 'Expected: rejected';
    chip.addEventListener('click', ()=>{ document.getElementById('simInput').value=t.s; resetSimulator(simState.key); });
    host.appendChild(chip);
  });
}
function resetSimulator(machineKey){
  const automaton = machineKey==='custom' && CUSTOM_AUTOMATON ? cloneAutomaton(CUSTOM_AUTOMATON) : cloneAutomaton(AUTOMATA[machineKey]);
  simState = { key: machineKey, automaton, input: document.getElementById('simInput').value.trim(), pos:0, active:[automaton.start], finished:false };
  drawAutomaton(automaton, simState.active);
  renderTrace();
  document.getElementById('simActiveLabel').textContent = automaton.type==='NFA' ? 'ACTIVE STATE SET' : 'CURRENT STATE';
  document.getElementById('simActiveStates').textContent = '{ '+simState.active.join(', ')+' }';
  document.getElementById('simResultBadge').innerHTML='';
  document.getElementById('traceLog').innerHTML = 'δ̂('+automaton.start+', w) — press Step or Run to begin.';
  document.getElementById('langDesc').textContent = automaton.lang || 'Custom machine you built.';
  populateQuickChips(automaton);
  const wrap=document.getElementById('dfaRevealWrap');
  wrap.classList.add('blurred');
  document.getElementById('dfaTableHost').innerHTML = renderDfaTable(automaton);
}
function renderTrace(){
  const st=simState;
  const wrap=document.getElementById('simTrace');
  wrap.innerHTML='';
  const chip=(txt,cls)=>{ const c=document.createElement('span'); c.className='trace-chip'+(cls?' '+cls:''); c.textContent=txt; return c; };
  wrap.appendChild(chip('start: {'+st.automaton.start+'}','active'));
  for(let i=0;i<st.pos;i++){ wrap.appendChild(chip(st.input[i])); }
}
function appendTraceLog(line){
  const el=document.getElementById('traceLog');
  el.innerHTML += '<br>'+line;
  el.scrollTop = el.scrollHeight;
}
function stepSimulator(){
  const st=simState;
  if(st.finished) return;
  if(st.pos>=st.input.length){
    st.finished=true;
    const accept = st.active.some(s=>st.automaton.accept.includes(s));
    const badge=document.getElementById('simResultBadge');
    badge.innerHTML = '<span class="result-badge '+(accept?'accept':'reject')+'">'+(accept?'&#10003; String ACCEPTED':'&#10007; String REJECTED')+' &mdash; \u03B4\u0302(q0, w) '+(accept?'&isin;':'&notin;')+' F</span>';
    appendTraceLog('<b>Result:</b> '+(accept? 'ACCEPTED (final state set intersects F)':'REJECTED (no active state is in F)'));
    drawAutomaton(st.automaton, st.active);
    pushCapped(progress.simRuns, {machine: st.automaton.name || 'Custom machine', input: st.input, accepted: accept, ts: Date.now()}, 60);
    saveProgress();
    return;
  }
  const sym = st.input[st.pos];
  if(!st.automaton.alphabet.includes(sym)){
    appendTraceLog('<b>Error:</b> symbol "'+sym+'" is not in \u03A3={'+st.automaton.alphabet.join(',')+'}');
    st.finished=true;
    return;
  }
  const before = st.active.slice();
  let next;
  if(st.automaton.type==='NFA'){
    let set=new Set();
    st.active.forEach(s=>{ ((st.automaton.trans[s]||{})[sym]||[]).forEach(x=>set.add(x)); });
    next=[...set];
  } else {
    next = st.active.map(s=> (st.automaton.trans[s]||{})[sym]).filter(Boolean);
    next = [...new Set(next)];
  }
  st.active = next; st.pos++;
  appendTraceLog('\u03B4({'+before.join(',')+'}, '+sym+') = {'+(next.length?next.join(','):'&empty;')+'}');
  document.getElementById('simActiveStates').textContent = st.active.length? '{ '+st.active.join(', ')+' }' : '\u2205 (trap)';
  drawAutomaton(st.automaton, st.active);
  renderTrace();
  if(st.pos>=st.input.length){ stepSimulator(); }
}
let runIv=null;
function runSimulator(){
  const st=simState;
  if(!st) return;
  if(runIv){ clearInterval(runIv); runIv=null; }
  resetSimulator(st.key);
  const speed = parseInt(document.getElementById('simSpeed').value,10) || 600;
  runIv=setInterval(()=>{
    if(!simState || simState.finished || simState.pos>simState.input.length){ clearInterval(runIv); runIv=null; return; }
    stepSimulator();
    if(simState.finished){ clearInterval(runIv); runIv=null; }
  }, speed);
}
document.getElementById('simMachine').addEventListener('change', e=> resetSimulator(e.target.value));
document.getElementById('simInput').addEventListener('input', ()=>{ if(simState) resetSimulator(simState.key); });
document.getElementById('simRun').addEventListener('click', runSimulator);
document.getElementById('simStep').addEventListener('click', stepSimulator);
document.getElementById('simReset').addEventListener('click', ()=> simState && resetSimulator(simState.key));
document.getElementById('dfaRevealBtn').addEventListener('click', ()=>{ document.getElementById('dfaRevealWrap').classList.remove('blurred'); });

/* builder mode */
document.getElementById('tabPreset').addEventListener('click', ()=>{
  document.getElementById('tabPreset').classList.add('active');
  document.getElementById('tabBuilder').classList.remove('active');
  document.getElementById('builderPanel').style.display='none';
  document.getElementById('presetSelectField').style.display='block';
  resetSimulator(document.getElementById('simMachine').value);
});
document.getElementById('tabBuilder').addEventListener('click', ()=>{
  document.getElementById('tabBuilder').classList.add('active');
  document.getElementById('tabPreset').classList.remove('active');
  document.getElementById('builderPanel').style.display='block';
  document.getElementById('presetSelectField').style.display='none';
});
document.getElementById('bBuild').addEventListener('click', ()=>{
  const errEl=document.getElementById('bError'); errEl.textContent='';
  try{
    const type=document.getElementById('bType').value;
    const alphabet=document.getElementById('bAlphabet').value.split(',').map(s=>s.trim()).filter(Boolean);
    const states=document.getElementById('bStates').value.split(',').map(s=>s.trim()).filter(Boolean);
    const start=document.getElementById('bStart').value.trim();
    const accept=document.getElementById('bAccept').value.split(',').map(s=>s.trim()).filter(Boolean);
    if(!states.includes(start)) throw new Error('Start state must be one of the listed states.');
    accept.forEach(a=>{ if(!states.includes(a)) throw new Error('Accept state "'+a+'" is not in the states list.'); });
    const trans={};
    states.forEach(s=> trans[s]={});
    const lines=document.getElementById('bTrans').value.split('\n').map(l=>l.trim()).filter(Boolean);
    lines.forEach(line=>{
      const m=line.match(/^([^,]+),([^-]+)->(.+)$/);
      if(!m) throw new Error('Could not parse line: '+line);
      const s=m[1].trim(), sym=m[2].trim(), rest=m[3].trim();
      if(!states.includes(s)) throw new Error('Unknown state "'+s+'" in line: '+line);
      if(!alphabet.includes(sym)) throw new Error('Unknown symbol "'+sym+'" in line: '+line);
      const targets=rest.split('|').map(x=>x.trim()).filter(Boolean);
      targets.forEach(t=>{ if(!states.includes(t)) throw new Error('Unknown target state "'+t+'" in line: '+line); });
      trans[s][sym] = type==='DFA' ? targets[0] : targets;
    });
    if(type==='DFA'){
      states.forEach(s=> alphabet.forEach(sym=>{ if(!(sym in trans[s])) trans[s][sym]=null; }) );
    } else {
      states.forEach(s=> alphabet.forEach(sym=>{ if(!(sym in trans[s])) trans[s][sym]=[]; }) );
    }
    CUSTOM_AUTOMATON = { name:'Custom '+type, type, states, alphabet, start, accept, trans, lang:'A custom '+type+' you defined — Σ={'+alphabet.join(',')+'}, '+states.length+' states.', tests:[] };
    document.getElementById('simMachine').value='bin';
    simState=null;
    resetSimulator('custom');
    showToast('Machine built — try it below');
  }catch(err){ errEl.textContent = err.message; }
});

/* =========================================================
   14. ANALYTICS
   ========================================================= */
function computeStats(){
  const qh = progress.quizHistory || [];
  const totalAnswered = qh.reduce((s,h)=>s+h.total,0);
  const totalCorrect = qh.reduce((s,h)=>s+h.score,0);
  const acc = totalAnswered ? Math.round((totalCorrect/totalAnswered)*100) : 0;
  const simRuns = (progress.simRuns||[]).length;
  const simAccepted = (progress.simRuns||[]).filter(r=>r.accepted).length;
  const flashSeen = (progress.flashHistory||[]).length;
  const flashKnown = (progress.flashHistory||[]).filter(f=>f.verdict==='know').length;
  const totalTime = Object.values(progress.topicTime||{}).reduce((a,b)=>a+b,0);
  return { totalAnswered, totalCorrect, acc, quizzesTaken: qh.length, simRuns, simAccepted, flashSeen, flashKnown, totalTime, streak: currentStreak() };
}
function statCard(n,label){ return '<div class="plate stat-card"><span class="n">'+n+'</span><span class="lbl">'+label+'</span></div>'; }
function renderAnalytics(){
  const s=computeStats();
  document.getElementById('statGrid').innerHTML =
    statCard(s.quizzesTaken,'QUIZZES TAKEN') +
    statCard(s.acc+'%','OVERALL ACCURACY') +
    statCard(s.simRuns,'SIMULATOR RUNS') +
    statCard(s.flashSeen,'FLASHCARDS REVIEWED') +
    statCard(formatDuration(s.totalTime),'TIME STUDIED') +
    statCard(s.streak+' day'+(s.streak===1?'':'s'),'CURRENT STREAK');

  const barsHost=document.getElementById('unitBars');
  barsHost.innerHTML='';
  TOPICS.forEach(t=>{
    const p=topicScorePct(t.id);
    const row=document.createElement('div'); row.className='bar-row';
    row.innerHTML='<span class="name">Unit '+t.num+' · '+t.title+'</span><div class="track"><div class="fill" style="width:'+p+'%"></div></div><span class="pct">'+p+'%</span>';
    barsHost.appendChild(row);
  });

  const activityHost=document.getElementById('activityList');
  let events=[];
  (progress.quizHistory||[]).forEach(h=> events.push({ts:h.ts, kind:'quiz', text:'Scored '+h.score+'/'+h.total+' on '+h.name, pct:h.pct}));
  (progress.simRuns||[]).forEach(r=> events.push({ts:r.ts, kind:'sim', text:'Tested "'+(r.input||'Λ')+'" on '+r.machine+' — '+(r.accepted?'accepted':'rejected')}));
  (progress.flashHistory||[]).forEach(f=>{
    const card=FLASHCARDS.find(c=>c.id===f.id);
    events.push({ts:f.ts, kind:'flash', text:(f.verdict==='know'?'Knew: ':'Marked for review: ')+(card?card.term:f.id)});
  });
  events.sort((a,b)=>b.ts-a.ts);
  events = events.slice(0,12);
  if(events.length===0){
    activityHost.innerHTML='<div class="empty-note">No activity yet — take a quiz, try the simulator, or flip through some flashcards.</div>';
  } else {
    activityHost.innerHTML = events.map(e=>{
      const ic = e.kind==='quiz' ? 'quiz' : (e.kind==='sim' ? 'cpu' : 'cards');
      const d=new Date(e.ts);
      const when = d.toLocaleDateString(undefined,{month:'short',day:'numeric'})+' '+d.toLocaleTimeString(undefined,{hour:'2-digit',minute:'2-digit'});
      return '<div class="activity-item"><span class="ic">'+icon(ic,15)+'</span><div class="body">'+e.text+'</div><span class="meta">'+when+'</span></div>';
    }).join('');
  }
}
function openAnalytics(){
  stopTopicTimer();
  showView('analytics'); setActiveNav('analytics'); updateCrumbs('MY PROGRESS');
  renderAnalytics();
  markActiveToday();
}
document.getElementById('exportDataBtn').addEventListener('click', ()=>{
  const blob = new Blob([JSON.stringify(progress, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a=document.createElement('a'); a.href=url; a.download='toc-study-progress.json';
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
  showToast('Progress exported');
});
document.getElementById('resetDataBtn').addEventListener('click', ()=>{
  if(confirm('This will permanently erase your quiz scores, simulator history, flashcard progress and study time in this browser. Continue?')){
    progress = defaultProgress();
    saveProgress();
    renderAnalytics(); renderHome(); refreshNavMeta();
    showToast('All data reset');
  }
});

/* =========================================================
   15. SEARCH
   ========================================================= */
let SEARCH_INDEX=[];
function buildSearchIndex(){
  const idx=[];
  TOPICS.forEach(t=>{
    const div=document.createElement('div'); div.innerHTML=t.html;
    div.querySelectorAll('.section-block').forEach(sec=>{
      const label = sec.getAttribute('data-sub');
      const text = sec.textContent.replace(/\s+/g,' ').trim();
      idx.push({type:'topic', unitId:t.id, unitTitle:t.title, label, text: text.slice(0,220)});
    });
  });
  Object.entries(QUIZ).forEach(([id,qs])=>{
    const t=TOPICS.find(x=>x.id===id);
    qs.forEach((q,i)=> idx.push({type:'quiz', unitId:id, unitTitle:t.title, label:'Question '+(i+1), text:q.q}));
  });
  FLASHCARDS.forEach(c=>{
    const t=TOPICS.find(x=>x.id===c.topic);
    idx.push({type:'flash', unitId:c.topic, unitTitle:t?t.title:'', label:c.term, text:c.definition});
  });
  return idx;
}
function openSearch(){
  document.getElementById('searchOverlay').classList.add('show');
  const input=document.getElementById('searchInput');
  input.value=''; input.focus();
  renderSearchResults('');
}
function closeSearch(){ document.getElementById('searchOverlay').classList.remove('show'); }
function renderSearchResults(q){
  const host=document.getElementById('searchResults');
  q=q.trim().toLowerCase();
  if(!q){ host.innerHTML='<div class="search-empty">Type to search across every unit, quiz question and flashcard.</div>'; return; }
  const matches = SEARCH_INDEX.filter(item => item.text.toLowerCase().includes(q) || item.label.toLowerCase().includes(q)).slice(0,25);
  if(matches.length===0){ host.innerHTML='<div class="search-empty">No results for "'+q+'".</div>'; return; }
  const typeLabel={topic:'UNIT NOTES', quiz:'QUIZ QUESTION', flash:'FLASHCARD'};
  host.innerHTML = matches.map((m,i)=>
    '<div class="search-result" data-i="'+i+'"><span class="rtitle">'+m.label+'</span><span class="rmeta">'+typeLabel[m.type]+' &middot; '+m.unitTitle+'</span><span class="rsnippet">'+m.text+'</span></div>'
  ).join('');
  [...host.querySelectorAll('.search-result')].forEach((el,i)=>{
    el.addEventListener('click', ()=>{
      const m=matches[i];
      closeSearch();
      if(m.type==='topic'){ openTopic(m.unitId); setTimeout(()=>{ const target=[...document.querySelectorAll('#topicBody .section-block')].find(x=>x.dataset.sub===m.label); if(target) target.scrollIntoView({behavior:'smooth'}); },80); }
      else if(m.type==='quiz'){ startQuiz(m.unitId); }
      else if(m.type==='flash'){ openFlashcards(m.unitId); }
    });
  });
}
document.getElementById('searchInput').addEventListener('input', e=> renderSearchResults(e.target.value));
document.getElementById('searchOverlay').addEventListener('click', e=>{ if(e.target.id==='searchOverlay') closeSearch(); });
document.addEventListener('keydown', e=>{
  if(e.key==='/' && document.activeElement.tagName!=='INPUT' && document.activeElement.tagName!=='TEXTAREA'){ e.preventDefault(); openSearch(); }
  if(e.key==='Escape') closeSearch();
});

/* =========================================================
   16. THEME + MOBILE NAV + ICON MOUNTS
   ========================================================= */
function initTheme(){
  const saved = localStorage.getItem('toc_theme');
  if(saved==='light' || saved==='dark') document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon();
}
function updateThemeIcon(){
  const cur=document.documentElement.getAttribute('data-theme');
  const dark = cur==='dark' || (!cur && matchMedia('(prefers-color-scheme: dark)').matches);
  document.getElementById('themeToggle').innerHTML = icon(dark?'sun':'moon');
}
document.getElementById('themeToggle').addEventListener('click', ()=>{
  const cur = document.documentElement.getAttribute('data-theme');
  const isDark = cur==='dark' || (!cur && matchMedia('(prefers-color-scheme: dark)').matches);
  const next = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try{ localStorage.setItem('toc_theme', next); }catch(e){}
  updateThemeIcon();
});
function openSidebar(){ document.getElementById('sidebar').classList.add('open'); document.getElementById('scrim').classList.add('show'); }
function closeSidebar(){ document.getElementById('sidebar').classList.remove('open'); document.getElementById('scrim').classList.remove('show'); }
document.getElementById('hamburger').addEventListener('click', openSidebar);
document.getElementById('scrim').addEventListener('click', closeSidebar);
document.getElementById('sidebarSearchBtn').innerHTML = icon('search')+' Search';
document.getElementById('sidebarSearchBtn').addEventListener('click', openSearch);
document.getElementById('topSearchBtn').innerHTML = icon('search');
document.getElementById('topSearchBtn').addEventListener('click', openSearch);
document.getElementById('searchIconHost').innerHTML = icon('search',18);
document.getElementById('timerIconHost').innerHTML = icon('clock',14);

/* =========================================================
   17. INIT
   ========================================================= */
initTheme();
buildNav();
SEARCH_INDEX = buildSearchIndex();
updateTimerDisplay();
openHome();
markActiveToday();

})();
