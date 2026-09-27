<template>
	<main class="story-page">
		<nav class="condition-filter" aria-label="Filter by condition">
			<div class="condition-filter-inner">
				<button
					v-for="condition in conditions"
					:key="condition.id"
					type="button"
					class="condition-pill"
					:class="{ active: selectedCondition.id === condition.id }"
					@click="selectedCondition = condition"
				>
					{{ condition.label }}
				</button>
			</div>
		</nav>

		<section
			id="hook"
			class="story-section reveal-section hook-section"
			data-section-id="hook"
			:class="{ 'is-visible': visibleSections.has('hook') }"
		>
			<div class="section-content">
				<h1>Nearly 80% of autoimmune disease patients are women.</h1>
				<p class="section-lede">
					The average time to a correct diagnosis is 4.6 years. Four or more doctors.
					And nearly half were told their symptoms were psychosomatic before anyone ran
					the right test.
				</p>
				<p class="source-line">Source: American Autoimmune Related Diseases Association (AARDA)</p>
			</div>
		</section>

		<section
			id="diagnosis"
			class="story-section reveal-section diagnosis-section"
			data-section-id="diagnosis"
			:class="{ 'is-visible': visibleSections.has('diagnosis') }"
		>
			<div class="section-content">
				<h2>A diagnosis often doesn't mean fixed. It means named.</h2>
				<p>
					These are complex, multi-system conditions that medicine is still learning.
					Managing symptoms is the goal — not a cure. And through every appointment,
					every wrong answer, every re-explanation, the companion waits too.
				</p>
				<div class="stat-callout">
					<div class="large-stat">{{ selectedCondition.diagnosisYears }}</div>
					<p>average years to diagnosis for {{ selectedCondition.label }}</p>
					<p class="source-line">Source: {{ selectedCondition.companionStatSource }}</p>
				</div>
			</div>
		</section>

		<section
			id="sliding-scale"
			class="story-section reveal-section sliding-section"
			data-section-id="sliding-scale"
			:class="{ 'is-visible': visibleSections.has('sliding-scale') }"
		>
			<div class="section-content">
				<h2>Chronic illness isn't a fixed state.</h2>
				<p>
					Severity shifts — by day, by year, by flare. What support looks like on a
					good day is completely different from what it looks like during a crisis.
					Companions have to recalibrate constantly, often without warning, often
					without language for what they're doing.
				</p>
				<div class="spectrum" aria-label="Spectrum from good day to flare day">
					<div class="spectrum-bar"></div>
					<div class="spectrum-labels">
						<span>Good day</span>
						<span>Flare day</span>
					</div>
				</div>
			</div>
		</section>

		<section
			id="invisible-data"
			class="story-section reveal-section invisible-section"
			data-section-id="invisible-data"
			:class="{ 'is-visible': visibleSections.has('invisible-data') }"
		>
			<div class="section-content">
				<h2>The data exists. The tools don't.</h2>
				<p>
					{{ globalStats.caregiverIsOneInFour ? '1 in 4' : 'Many' }} American adults —
					{{ globalStats.usCaregiversMillions }} million people — are caregivers.
					{{ globalStats.t1dParentModerateToSevereBurden }}% of parents of children with
					Type 1 Diabetes report moderate-to-severe burden. The research on companion
					wellbeing exists. The apps built for companions almost don't.
				</p>
				<blockquote>
					{{ selectedCondition.companionStat }}
				</blockquote>
				<p class="source-line">Source: {{ selectedCondition.companionStatSource }}</p>
				<p class="source-line">Global statistics: AARP & National Alliance for Caregiving, 2025</p>
			</div>
		</section>

		<section
			id="misdiagnoses"
			class="story-section reveal-section misdiagnosis-section"
			data-section-id="misdiagnoses"
			:class="{ 'is-visible': visibleSections.has('misdiagnoses') }"
		>
			<div class="section-content">
				<h2>What they were told instead.</h2>
				<p>
					Before a correct diagnosis, most patients with {{ selectedCondition.label }}
					were told they had something else entirely.
				</p>
				<div class="misdiagnosis-tags">
					<span v-for="diagnosis in selectedCondition.commonMisdiagnoses" :key="diagnosis">
						{{ diagnosis }}
					</span>
				</div>
			</div>
		</section>

		<div
			class="reveal-section day-in-life-reveal"
			data-section-id="day-in-life"
			:class="{ 'is-visible': visibleSections.has('day-in-life') }"
		>
			<DayInLife />
		</div>

		<footer class="story-footer">
			<p>Copyright 2026 Ariana de Ryss · Protogen 302 · Made with Copilots, a Garden Seed Stash, and far too much tea ☕</p>
			<p class="footer-disclaimer">
				This project is an educational resource. It does not replace clinical medical advice,
				professional diagnosis, or treatment direction.
			</p>
		</footer>
	</main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { conditions } from '../data/conditions'
import { globalStats } from '../data/globalStats'
import type { Condition } from '../types'
import DayInLife from '../components/DayInLife.vue'

const selectedCondition = ref<Condition>(conditions[0])
const visibleSections = ref<Set<string>>(new Set())

onMounted(() => {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return

				const sectionId = entry.target.getAttribute('data-section-id')
				if (!sectionId) return

				visibleSections.value = new Set(visibleSections.value).add(sectionId)
				observer.unobserve(entry.target)
			})
		},
		{ threshold: 0.15 },
	)

	document.querySelectorAll('.reveal-section').forEach((section) => observer.observe(section))
})
</script>

<style>
* {
	box-sizing: border-box;
}

body {
	margin: 0;
	background: #faf8f5;
}

h1,
h2 {
	font-family: 'Playfair Display', serif;
}

p,
span,
button,
label {
	font-family: 'DM Sans', sans-serif;
}
</style>

<style scoped>
.story-page {
	background: #faf8f5;
	color: #2c2825;
}

.condition-filter {
	position: sticky;
	top: 0;
	z-index: 10;
	padding: 12px 24px;
	background: rgba(250, 248, 245, 0.96);
	border-bottom: 1px solid #e0d8cf;
}

.condition-filter-inner {
	display: flex;
	gap: 8px;
	max-width: 960px;
	margin: 0 auto;
	overflow-x: auto;
	padding-bottom: 2px;
}

.condition-pill,
.misdiagnosis-tags span {
	flex: 0 0 auto;
	padding: 8px 16px;
	border: 1px solid #e0d8cf;
	border-radius: 20px;
	background: #f2ede6;
	color: #2c2825;
	font-family: 'DM Sans', sans-serif;
	font-size: 0.875rem;
	cursor: pointer;
	white-space: nowrap;
}

.condition-pill.active {
	border-color: #7a9e8e;
	background: #7a9e8e;
	color: #faf8f5;
}

.story-section {
	opacity: 0;
	transform: translateY(24px);
	transition: all 0.6s ease;
}

.reveal-section {
	opacity: 0;
	transform: translateY(24px);
	transition: all 0.6s ease;
}

.story-section.is-visible {
	opacity: 1;
	transform: translateY(0);
}

.reveal-section.is-visible {
	opacity: 1;
	transform: translateY(0);
}

.section-content {
	width: min(100%, 760px);
	margin: 0 auto;
}

.story-section {
	padding: 80px 24px;
}

.hook-section,
.sliding-section,
.misdiagnosis-section {
	background: #faf8f5;
}

.diagnosis-section,
.invisible-section {
	background: #f2ede6;
}

h1,
h2 {
	margin: 0 0 24px;
	color: #2c2825;
	font-weight: 400;
	line-height: 1.15;
}

h1 {
	font-size: 3rem;
}

h2 {
	font-size: 2rem;
}

.section-content > p {
	margin: 0;
	color: #6b5f58;
	font-family: 'DM Sans', sans-serif;
	font-size: 1rem;
	line-height: 1.7;
}

.hook-section .section-content {
	text-align: center;
}

.section-lede {
	color: #6b5f58;
	font-family: 'DM Sans', sans-serif;
	font-size: 1.125rem;
	line-height: 1.7;
}

.source-line {
	margin-top: 16px !important;
	color: #6b5f58;
	font-family: 'DM Sans', sans-serif;
	font-size: 0.75rem !important;
	line-height: 1.5 !important;
}

.stat-callout {
	margin-top: 40px;
	text-align: center;
}

.large-stat {
	color: #c9a96e;
	font-family: 'Playfair Display', serif;
	font-size: 4rem;
	line-height: 1;
}

.stat-callout p {
	margin: 12px 0 0;
	color: #6b5f58;
	font-family: 'DM Sans', sans-serif;
	font-size: 0.875rem;
}

.spectrum {
	max-width: 560px;
	margin: 32px auto 0;
}

.spectrum-bar {
	height: 12px;
	border-radius: 6px;
	background: linear-gradient(to right, #7a9e8e, #c9a96e, #c97a7a);
}

.spectrum-labels {
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
	color: #6b5f58;
	font-family: 'DM Sans', sans-serif;
	font-size: 0.875rem;
}

blockquote {
	margin: 32px 0 0;
	padding-left: 24px;
	border-left: 3px solid #7a9e8e;
	color: #2c2825;
	font-family: 'Playfair Display', serif;
	font-size: 1.125rem;
	font-style: italic;
	line-height: 1.6;
}

.misdiagnosis-tags {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin-top: 32px;
}

.misdiagnosis-tags span {
	display: inline-flex;
	cursor: default;
}

.story-footer {
	padding: 32px 24px;
	background: #2c2825;
	color: #faf8f5;
	font-family: 'DM Sans', sans-serif;
	font-size: 0.875rem;
	text-align: center;
}

.story-footer p {
	margin: 0;
}

.footer-disclaimer {
	margin-top: 8px !important;
	color: #e0d8cf;
	font-size: 0.8rem;
}

@media (max-width: 600px) {
	.story-section {
		padding: 64px 24px;
	}

	h1 {
		font-size: 2.5rem;
	}
}
</style>
