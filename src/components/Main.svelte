<script>
  import { foodstore } from "../store.js";
  let mymoney = 0;

  let foodlist = $foodstore;
</script>

<style lang="scss">
  @import "../scss/_definition.scss";
  .container {
    .food-list {
      background-color: yellow;
      padding: 16px;
      .food {
        padding: 8px;
        border: 1px solid #707070;
        &.cant {
          opacity: 0.5;
        }
      }
    }

    p {
      font-size: 28px;
      font-weight: 900;
    }
  }
</style>

<div class="container">
  <input type="number" bind:value={mymoney} />

  <div class="food-list">
    {#each foodlist as food}
      {#if food.price > mymoney}
        <div class="food cant">
          <p class="name">{food.name}</p>
          <p class="price">{food.price}</p>
        </div>
      {:else}
        <div class="food">
          <p class="name">{food.name}</p>
          <p class="price">{food.price}</p>
        </div>
      {/if}
    {/each}
  </div>
</div>
