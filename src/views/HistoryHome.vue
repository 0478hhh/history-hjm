<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  // 对应原型 backMain() 中的 document.title 恢复
  document.title = '史料之外 — 数字史馆'
})

/** 对应原型 openWild()：隐藏正史、显示野史 Side B */
function openWild(): void {
  router.push({ name: 'wild' })
}

/** 对应原型 exploreBtn：平滑滚动到「探索档案」栏目 */
function goCollections(): void {
  document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })
}

/** 对应原型 searchBtn：演示行为（无真实后端） */
function onSearch(): void {
  const q = window.prompt('想查找什么？例如：唐太宗、安史之乱、史记')
  if (q && q.trim()) {
    window.alert(`原型演示：后续可在这里检索“${q.trim()}”相关人物、事件与史料。`)
  }
}
</script>

<template>
  <div id="mainPage">
    <header class="top">
      <div class="logo">
        <span class="logo-mark">史</span>
        <span>史料之外 <span style="font-weight: 400; color: #77766e">/ DIGITAL ARCHIVE</span></span>
      </div>
      <nav class="nav">
        <a href="#collections">探索档案</a>
        <a href="#timeline">历史切片</a>
        <a href="#wildEntry">野史入口 ↗</a>
      </nav>
      <div class="top-right">
        <span class="status">一个持续生长的历史现场</span>
        <button class="search-icon" aria-label="搜索" @click="onSearch">⌕</button>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="hero-left">
          <div class="kicker"><span class="dot"></span> OPEN ARCHIVE / 持续更新中</div>
          <h1>历史不止<br /><span class="blue">一种</span><span class="outline">写法。</span></h1>
          <p class="lead">
            从被写进史书的时代，到散落在民间的只言片语。把人物、事件与不同版本的记载放在一起，重新看见历史的复杂与鲜活。
          </p>
          <div class="hero-actions">
            <button class="primary" @click="goCollections">开始探索 <span>↗</span></button>
            <a class="secondary" href="#collections">先看看这里有什么 ↓</a>
          </div>
        </div>
        <div class="hero-art" aria-label="数字史馆视觉封面">
          <div class="orbit"></div>
          <div class="art-card">
            <div class="micro">ARCHIVE NO. 0001<br />CHINA / HISTORY</div>
            <div class="art-title">时间<br /><span>切片</span></div>
            <div class="art-bottom">
              <span>记录已发生的<br />也保留尚待回答的</span>
              <span>↗ 01—∞</span>
            </div>
          </div>
          <div class="seal">不止<br />一种<br />说法</div>
        </div>
      </section>

      <div class="ticker">
        <div class="ticker-inner">
          人物不是标签 <b>✳</b> 事件不止结论 <b>✳</b> 每条记载都有来处 <b>✳</b> 让不同说法并置
          <b>✳</b> 人物不是标签 <b>✳</b> 事件不止结论 <b>✳</b> 每条记载都有来处 <b>✳</b> 让不同说法并置
          <b>✳</b>
        </div>
      </div>

      <section id="collections" class="section">
        <div class="section-head">
          <div>
            <div class="section-label">01 / EXPLORE THE ARCHIVE</div>
            <h2>从哪里开始认识历史？</h2>
          </div>
          <div class="section-note">
            不必从头读完一部史书。<br />从一个人物、一场事件，或一个问题开始。
          </div>
        </div>
        <div class="tiles">
          <a class="tile blue" href="#timeline">
            <div class="tile-top"><span>COLLECTION 01</span><span class="tile-icon">↗</span></div>
            <div>
              <h3>朝代与时间</h3>
              <p>沿着时间线，查看王朝更迭与时代节点。</p>
            </div>
            <span class="tile-arrow">→</span>
          </a>
          <a class="tile lime" href="#timeline">
            <div class="tile-top"><span>COLLECTION 02</span><span class="tile-icon">✳</span></div>
            <div>
              <h3>人物切片</h3>
              <p>一个人，多重身份与不同评价。</p>
            </div>
            <span class="tile-arrow">↗</span>
          </a>
          <a class="tile coral" href="#timeline">
            <div class="tile-top"><span>COLLECTION 03</span><span class="tile-icon">⌁</span></div>
            <div>
              <h3>事件现场</h3>
              <p>把背景、经过、结果与争议放在一起。</p>
            </div>
            <span class="tile-arrow">↗</span>
          </a>
        </div>
      </section>

      <section id="wildEntry" class="wild-banner">
        <div class="wild-text">
          <div class="section-label">SIDE B / THE OTHER ACCOUNT</div>
          <h2>史书之外，还有另一面。</h2>
          <p>
            传闻、笔记、私家记述与未解之谜。这里不急着给结论，而是标明出处、保留疑问，让每种说法都能被看见，也能被检验。
          </p>
        </div>
        <button class="portal" @click="openWild">
          <strong>野史</strong>
          <small>进入 SIDE B</small>
          <span>↗</span>
        </button>
      </section>
    </main>

    <footer>
      <span>史料之外 · 一个持续生长的数字史馆</span>
      <span>记录来源 · 区分事实与传闻 · 保留不同版本</span>
    </footer>
  </div>
</template>

