<template>
  <div class="container">
    <div class="timer">
      <div class="base-timer">
        <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g class="base-timer__circle">
            <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
            <path
              id="base-timer-path-remaining"
              :stroke-dasharray="circleDasharray"
              class="base-timer__path-remaining"
              d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0"></path>
          </g>
        </svg>
      </div>

      <div class="timer__time">
        {{(!countDownFinished && !paused) ? countDown : formatTime(timeLeft)}}
      </div>
    </div>

    <div class="buttons">
      <button class="buttons__pause">
        <font-awesome-icon @click = "pause()" v-if="!paused" :icon="['fas', 'pause']"/>
        <font-awesome-icon @click = "play()" v-if="paused" :icon="['fas', 'play']"/>
      </button>
      <button @click = "restartTimer()" class="buttons__restart">
        <font-awesome-icon :icon="['fas', 'redo-alt']"/>
      </button>
    </div>
  </div>
</template>

<script>
import alarmCountDownMp3 from '../assets/alarmCountDown.mp3';
import alarmLastCountMp3 from '../assets/alarmLastCount.mp3';

export default {
  name: 'Timer',
  props: {
    timeLimit: {
      type: Number,
      default: 20,
    },
  },

  data() {
    return {
      circleDasharray: 283,
      timeIntervalTimer: null,
      timeIntervalCount: null,
      timePassed: 0,
      timeLeft: this.timeLimit,
      paused: true,
      countDown: 3,
      countDownFinished: false,
      audioCountDown: new Audio(alarmCountDownMp3),
      audioLasCount: new Audio(alarmLastCountMp3),
    };
  },

  // mounted() { this.startTimer() };

  watch: {
    timeLeft() {
      if (this.timeLeft === 0) this.$emit('timerDone');
    },

    countDownFinished() {
      if (this.countDownFinished) {
        if (this.timePassed === 0) this.startTimer();
      }
    },

    paused() {
      if (!this.paused) {
        this.startCountDown();
      }
      if (this.paused) {
        this.countDown = 3;
        this.countDownFinished = false;
      }
    },
  },
  methods: {
    pause() {
      if (this.countDownFinished) this.paused = true;
    },

    play() {
      this.paused = false;
    },

    startTimer() {
      this.timeIntervalTimer = setInterval(() => {
        if (this.countDownFinished) {
          this.timePassed += 1;
          this.timeLeft = this.timeLimit - this.timePassed;
          this.setCircleDasharray();
          if (this.timeLeft === 0) {
            this.audioLasCount.play();
            clearInterval(this.timeIntervalTimer);
          } else if (this.timeLeft < 4) this.audioCountDown.play();
        }
      }, 1000);
    },

    formatTime(time) {
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;
      if (seconds < 10) seconds = `0${seconds}`;
      if (minutes < 10) minutes = `0${minutes}`;
      return `${minutes}:${seconds}`;
    },

    calculateTimeFraction() {
      const rawTimeFraction = this.timeLeft / this.timeLimit;
      return rawTimeFraction - (1 / this.timeLimit) * (1 - rawTimeFraction);
    },

    setCircleDasharray() {
      const val = (this.calculateTimeFraction() * 283).toFixed(0);
      this.circleDasharray = `${val > 0 ? val : 0} 283`;
    },

    restartTimer() {
      clearInterval(this.timeIntervalTimer);
      this.circleDasharray = 283;
      this.paused = true;
      this.timePassed = 0;
      this.timeLeft = this.timeLimit;
      clearInterval(this.timeIntervalCount);
    },

    startCountDown() {
      this.timeIntervalCount = setInterval(() => {
        this.countDown -= 1;
        if (this.countDown === 0) {
          clearInterval(this.timeIntervalCount);
          this.countDownFinished = true;
        }
      }, 1000);
    },
  },
};

</script>

<style lang="scss" scoped>
.container {
  background-color: white;
  padding: 10px;
  box-sizing: border-box;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
  margin: 20px;
  * {
    color: var(--color-primary);
  }
}

.base-timer__svg {
  transform: scaleX(-1);
}

.base-timer__circle {
  fill: none;
  stroke: none;
}

.base-timer__path-elapsed {
  stroke-width: 6px;
  stroke: var(--color-lightgray);
}

.base-timer__path-remaining {
  color: var(--color-primary);
  stroke-width: 6px;
  transform: rotate(90deg);
  transform-origin: center;
  transition: 1s linear all;
  fill-rule: nonzero;
  stroke: currentColor;
}

.base-timer {
  height: 100%;
  width: 100%;
  position: absolute;
}

.timer {
  height: 150px;
  width: 150px;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 20px;

  .timer__time {
    margin: auto;
    color: var(--color-primary);
    font-size: 30px;
  }
}

</style>
