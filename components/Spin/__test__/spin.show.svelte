<script>
  import { KSpin } from '../src/index';
  const spinOptions = {
    show: false,
    text: 'loading...'
  };

  const handleSpin = () => {
    spinOptions.show = true;
  };
</script>

<div use:KSpin={spinOptions} class="w-full h-200px flex justify-center items-center">
  <button on:click={handleSpin} id="spin_show">Spin</button>
</div>
