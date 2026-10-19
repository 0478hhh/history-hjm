<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

/** 对应原型 backMain()：隐藏野史、显示正史首页 */
function backMain(): void {
  router.push({ name: 'home' })
}

onMounted(() => {
  // 对应原型 openWild() 中的 document.title 更新
  document.title = '史料之外 · 野史 SIDE B'
})
</script>

<template>
  <!-- active class 复刻原型 .wild-view.active{display:block;animation:appear .45s ease} -->
  <section class="wild-view active">
    <header class="top">
      <div class="logo">
        <span class="logo-mark" style="background: var(--coral)">野</span>
        <span>史料之外 <span style="font-weight: 400; color: #aaa">/ SIDE B</span></span>
      </div>
      <nav class="nav">
        <a href="#wildRecords">异闻档案</a>
        <a href="#wildRecords">待考线索</a>
      </nav>
      <button class="back" style="margin: 0" @click="backMain">← 返回正史</button>
    </header>

    <section class="wild-hero">
      <div>
        <div class="kicker" style="background: transparent; border-color: #ffffff35; color: #ddd">
          <span class="dot"></span> SIDE B / OTHER ACCOUNTS
        </div>
        <h1>野史，<br />不急着<br />下结论。</h1>
        <p>
          这里收录正史之外的笔记、传闻、异说与私人记述。每条内容都尽可能标明来源与证据状态：已证实、存在争议，或仍待考证。
        </p>
        <button class="primary" @click="backMain">回到正史首页 <span>↗</span></button>
      </div>
      <div class="wild-visual">异</div>
    </section>

    <section id="wildRecords" class="wild-cards">
      <article class="wild-card">
        <small>FILE / 001</small>
        <h3>人物轶闻</h3>
        <p>来自笔记、书信与后人记述的另一种人物侧写。</p>
      </article>
      <article class="wild-card">
        <small>FILE / 002</small>
        <h3>宫廷与朝野</h3>
        <p>正史未详述的生活细节，以及不同来源的说法。</p>
      </article>
      <article class="wild-card">
        <small>FILE / 003</small>
        <h3>未解与存疑</h3>
        <p>先保留问题，再寻找证据；不把传闻直接当作事实。</p>
      </article>
    </section>

    <footer>
      <span>史料之外 · SIDE B</span>
      <span>传闻不是结论，出处值得追问。</span>
    </footer>
  </section>
</template>
