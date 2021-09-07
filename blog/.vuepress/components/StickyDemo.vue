<template>
  <div class="sticky-demo">
    <dl>
      <dt>A</dt>
      <dd>Andrew W.K.</dd>
      <dd>Apparat</dd>
      <dd>Arcade Fire</dd>
      <dd>At The Drive-In</dd>
      <dd>Aziz Ansari</dd>
      <footer>A Footer</footer>
    </dl>
    <dl>
      <dt>C</dt>
      <dd>Chromeo</dd>
      <dd>Common</dd>
      <dd>Converge</dd>
      <dd>Crystal Castles</dd>
      <dd>Cursive</dd>
      <footer>C Footer</footer>
    </dl>
    <dl>
      <dt>E</dt>
      <dd>Explosions In The Sky</dd>
      <footer>E Footer</footer>
    </dl>
    <dl>
      <dt>T</dt>
      <dd>Ted Leo & The Pharmacists</dd>
      <dd>T-Pain</dd>
      <dd>Thrice</dd>
      <dd>TV On The Radio</dd>
      <dd>Two Gallants</dd>
      <footer>T Footer</footer>
    </dl>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
* {
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 7px;
  background-color: #fff;

}
::-webkit-scrollbar-thumb {
  background-color: #000;
    border-radius: 10px;
}

.sticky-demo {
  height: 200px;
  overflow-y: auto;
  border: 1px solid #ddd;
}

dl {
  margin: 0;
  padding: 24px 0 0;
}

dt {
  background: #b8c1c8;
  border-bottom: 1px solid #989ea4;
  border-top: 1px solid #717d85;
  color: #fff;
  font: bold 18px/21px Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 2px 0 0 12px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

dd {
  font: bold 20px/45px Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0 0 0 12px;
  white-space: nowrap;
}

dd + dd {
  border-top: 1px solid #ccc;
}

footer {
  background-color: #ddd;
  color: #333;
  position: sticky;
  bottom: 0;
  padding: 2px 0 0 12px;
}
</style>