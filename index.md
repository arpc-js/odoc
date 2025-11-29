---
layout: home
---

<style>
.VPContent.is-home {
  padding: 0.1rem 0.1rem; /* 调整内边距 */
  background-color: #f8f8f8; /* 改背景色 */
}
.course-category {
  margin-bottom: 2.5rem;
}
.category-title {
  font-size: 2rem;
  font-weight: 600;
  margin-top: 0.8rem;
  margin-bottom: 1rem;
  border-left: 5px solid #3eaf7c;
  padding-left: 0.8rem;
  color: #333;
}
.course-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem; /* 卡片间距稍小 */
  margin-bottom: 1.5rem;
}
.course-card {
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  text-align: center;
  cursor: pointer;
  padding: 0.8rem; /* 内边距稍小 */
}
.course-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.12);
}
.course-card img {
  width: 100%;
  height: 120px; /* 图片高度缩短 */
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 0.6rem; /* 图片下间距稍小 */
}
.course-card h3 {
  font-size: 1rem; /* 标题略小 */
  color: #333;
  margin: 0.3rem 0;
}
.course-card p {
  font-size: 0.85rem; /* 文本略小 */
  color: #666;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}
.course-card a {
  display: inline-block;
  background: #3eaf7c;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.85rem;
  padding: 0.4rem 0.8rem;
  transition: all 0.2s ease;
}
.course-card a:hover {
  background: #36a16c;
}
@media(max-width: 1400px) {
  .course-grid { grid-template-columns: repeat(4, 1fr); }
}
@media(max-width: 1100px) {
  .course-grid { grid-template-columns: repeat(3, 1fr); }
}
@media(max-width: 800px) {
  .course-grid { grid-template-columns: repeat(2, 1fr); }
}
@media(max-width: 500px) {
  .course-grid { grid-template-columns: 1fr; }
}
</style>

<!-- golang路线 -->
<h2 class="category-title">☕golang路线</h2>
<div class="course-category">
  <div class="course-grid">
    <div class="course-card" onclick="location.href='/go/basic/brief'">
      <img src="https://img1.baidu.com/it/u=3832301141,3410087310&fm=253&fmt=auto&app=138&f=JPEG?w=533&h=300" alt="Java 基础与进阶" />
      <h3>go基础(基础)</h3>
      <p>从基础语法到面向对象编程，全面掌握 go 开发技能。</p>
    </div>
    <div class="course-card" onclick="location.href='/courses/java-spring'">
      <img src="https://img2.baidu.com/it/u=1989396254,3035840477&fm=253&fmt=auto&app=120&f=JPEG?w=607&h=314" alt="Spring 框架" />
      <h3>web(基础)</h3>
      <p>掌握 Spring 框架核心概念及实战项目开发。</p>
    </div>
    <div class="course-card" onclick="location.href='/courses/java-concurrency'">
      <img src="https://img2.baidu.com/it/u=2044802650,1067595981&fm=253&fmt=auto&app=138&f=GIF?w=712&h=356" alt="Java 并发" />
      <h3>数据库(基础)</h3>
      <p>深入理解线程、锁和并发编程技巧。</p>
    </div>
    <div class="course-card" onclick="location.href='/courses/java-project'">
      <img src="https://img0.baidu.com/it/u=3290348688,3670688774&fm=253&fmt=auto&app=138&f=JPEG?w=812&h=500" alt="Java 高级项目" />
      <h3>项目实战(基础)</h3>
      <p>通过实战项目掌握完整的 Java 开发流程。</p>
    </div>
    <div class="course-card" onclick="location.href='/go/basic/env'">
      <img src="https://img1.baidu.com/it/u=3928867252,2686995192&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" alt="Java 高级特性" />
      <h3>go进阶(进阶)</h3>
      <p>深入学习 go 的高级特性，如多线程、网络编程等。</p>
    </div>
    <div class="course-card" onclick="location.href='/courses/java-project'">
      <img src="https://img2.baidu.com/it/u=2372233649,3764909538&fm=253&fmt=auto&app=138&f=JPEG?w=821&h=277" alt="Java 高级项目" />
      <h3>web微服务(基础)</h3>
      <p>通过实战项目掌握完整的 Java 开发流程。</p>
    </div>
    <div class="course-card" onclick="location.href='/courses/java-project'">
      <img src="https://img1.baidu.com/it/u=2433116461,3497340546&fm=253&fmt=auto&app=138&f=JPEG?w=638&h=359" alt="Java 高级项目" />
      <h3>数据库进阶(进阶)</h3>
      <p>通过实战项目掌握完整的 Java 开发流程。</p>
    </div>
    <div class="course-card" onclick="location.href='/courses/java-project'">
      <img src="https://img2.baidu.com/it/u=1409843398,1247988121&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" alt="Java 高级项目" />
      <h3>微服务项目实战(进阶)</h3>
      <p>通过实战项目掌握完整的 Java 开发流程。</p>
    </div>
  </div>
</div>

<!-- golang路线 -->
<h2 class="category-title">☕golang路线</h2>
<div class="course-category">
  <div class="course-grid">
    <div class="course-card" onclick="location.href='/go'">
      <img src="https://img1.baidu.com/it/u=3832301141,3410087310&fm=253&fmt=auto&app=138&f=JPEG?w=533&h=300" alt="Java 基础与进阶" />
      <h3>go语言基础</h3>
      <p>从基础语法到面向对象编程，全面掌握 go 开发技能。</p>
    </div>
    <div class="course-card" onclick="location.href='/go/basic/env.html'">
      <img src="https://img1.baidu.com/it/u=3928867252,2686995192&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" alt="Java 高级特性" />
      <h3>go语言进阶</h3>
      <p>深入学习 go 的高级特性，如多线程、网络编程等。</p>
    </div>
    <div class="course-card" onclick="location.href='/courses/java-spring'">
      <img src="https://img2.baidu.com/it/u=1989396254,3035840477&fm=253&fmt=auto&app=120&f=JPEG?w=607&h=314" alt="Spring 框架" />
      <h3>go web</h3>
      <p>掌握 Spring 框架核心概念及实战项目开发。</p>
    </div>
    <div class="course-card" onclick="location.href='/courses/java-concurrency'">
      <img src="https://img2.baidu.com/it/u=2044802650,1067595981&fm=253&fmt=auto&app=138&f=GIF?w=712&h=356" alt="Java 并发" />
      <h3>数据库</h3>
      <p>深入理解线程、锁和并发编程技巧。</p>
    </div>
    <div class="course-card" onclick="location.href='/courses/java-project'">
      <img src="https://img2.baidu.com/it/u=2372233649,3764909538&fm=253&fmt=auto&app=138&f=JPEG?w=821&h=277" alt="Java 高级项目" />
      <h3>微服务</h3>
      <p>通过实战项目掌握完整的 Java 开发流程。</p>
    </div>
    <div class="course-card" onclick="location.href='/courses/java-project'">
      <img src="https://img0.baidu.com/it/u=3290348688,3670688774&fm=253&fmt=auto&app=138&f=JPEG?w=812&h=500" alt="Java 高级项目" />
      <h3>项目实战</h3>
      <p>通过实战项目掌握完整的 Java 开发流程。</p>
    </div>
    <div class="course-card" onclick="location.href='/courses/java-project'">
      <img src="https://img2.baidu.com/it/u=1409843398,1247988121&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" alt="Java 高级项目" />
      <h3>微服务项目实战</h3>
      <p>通过实战项目掌握完整的 Java 开发流程。</p>
    </div>
    <div class="course-card" onclick="location.href='/courses/java-project'">
      <img src="https://img1.baidu.com/it/u=2433116461,3497340546&fm=253&fmt=auto&app=138&f=JPEG?w=638&h=359" alt="Java 高级项目" />
      <h3>八股文</h3>
      <p>通过实战项目掌握完整的 Java 开发流程。</p>
    </div>
  </div>
</div>
