<script>
    // export let person;
	  import ProfileImg from './ProfileImg.svelte';
</script>

<div class="wrapper-nav">
    <nav>
      <ul>
        <li><a href="/" class="active">Home</a></li>
        <li><a href="/We-Love-Web" class="active">We Love Web notes</a></li>
        <li><a href="/Learning-Journal" class="active">Learning Journal</a></li>
      </ul>
    </nav>
    <nav>
      <ul>
        <li><a href="/Sources" class="active">Sources</a></li>
      </ul>
    </nav>
  </div>

  <style>
  .wrapper-nav {
    height: 100%;
    display: flex;
    justify-content: space-between;
    background-color: var(--primary-orange);
    padding: 0 1em;
  }

  .wrapper-nav nav{
    width: 50%;
  }

  .wrapper-nav nav ul {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  :global(.wrapper-nav a.active){
    color: var(--secondary-color);
  }
  
  /* ====== 1ste nav ====== */
  
  .js .wrapper-nav nav:nth-child(1) {
    display: flex;
    width: 50%;
    justify-content: flex-start;
    align-items: center;
  }
  
  .wrapper-nav nav:nth-child(1) {
    display: flex;  
    justify-content: flex-start;
    align-items: center;
  }
  
  /* .wrapper-nav nav:nth-child(1) img {
    height: 100%;
  } */
  
  .wrapper-nav nav:nth-child(1) a:hover {
    border-bottom: 2px solid var(--primary-white);
    transition: 0.2s;
  }
  
  /* .js .wrapper-nav nav:nth-child(1) .openbtn {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: block;
  } */
  
  /* .wrapper-nav nav:nth-child(1) .openbtn {
    display: none;
  } */
  
  /* .wrapper-nav nav:nth-child(1) .openbtn .openbtn-area {
    transition: all 0.4s;
  } */
  
  /* .wrapper-nav nav:nth-child(1) .openbtn span {
    position: absolute;
    background: var(--primary-white);
    display: inline-block;
    border-radius: 3px;
    left: 13px;
    height: 3px;
    transition: all 0.4s;
    width: 50%;
    &:nth-of-type(1) {
      top: 16px;
    }
    &:nth-of-type(2) {
      top: 24px;
    }
    &:nth-of-type(3) {
      top: 32px;
      &::after {
        content: "menu";
        position: absolute;
        left: -8px;
        color: var(--primary-white);
      }
    }
  } */
  
  /* .wrapper-nav nav:nth-child(1) .openbtn.active .openbtn-area {
    transform: rotatex(360deg);
  } */
  
  /* .wrapper-nav nav:nth-child(1) .openbtn.active span {
    &:nth-of-type(1) {
      width: 45%;
      top: 18px;
      left: 14px;
      transform: translateY(6px) rotate(-135deg);
    }
    &:nth-of-type(2) {
      opacity: 0;
    }
    &:nth-of-type(3) {
      width: 45%;
      top: 30px;
      left: 14px;
      transform: translateY(-6px) rotate(135deg);
      &::after {
        content: "";
      }
    }
  } */
  
  /* ====== 2de nav ====== */
  
  .js .wrapper-nav nav:nth-child(2) {
    display: flex;
    flex-direction: row;
    width: 30%;
    justify-content: space-around;
    align-items: center;
  
    & a {
      display: flex;
      align-items: center;
    }
    & a:nth-child(2) {
      padding-left: 0.2em;
    }
    & a i {
      padding-left: 0.2em;
    }
  }
  
  .wrapper-nav nav:nth-child(2) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
  }
  
  /* .wrapper-nav nav:nth-child(2) a i {
    transition: all 1000ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
  } */
  
  /* .wrapper-nav nav:nth-child(2) a:hover i {
    transform: rotate(1turn);
  } */
    
  /* .wrapper-nav nav ul.moved {
    transform: translateX(-25%);
  } */
  
  
  </style>