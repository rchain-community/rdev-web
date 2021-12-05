<script>
  import CopyIcon from '../assets/copy.svg';
  import copy from 'copy-text-to-clipboard';

  export let text = "";
  const onClick = () => {
    if (copy(text)) {
      console.info("Text copied");
    }
  };

</script>

<div class="CopyText">
  <div>
  <input type="text" readonly="readonly" class="project-text projectRevAddr" value={text} style="color: #A93226;" />
  <button class="CopyButton" on:click={onClick}>
    <img src={CopyIcon} style="width: 1em" alt=''/>
  </button>
  </div>
</div>

<style>

  .CopyText {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 0.4em;
  }

  .CopyButton {
    padding: 0;
    border: none;
    background: none;
  }

  .projectRevAddr {
    border-radius: 5px;
    border: 1px solid #3D3D3D;
    padding: 0.4em;
  }
</style>