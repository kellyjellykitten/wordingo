<!-- 
<template>
    <div class="modal-backdrop">
        <div class="modal-wrapper">
            
            <div class="modal-container">
                <div class="icon">
                    <i @click="close" class="fas fa-window-close"></i>
                </div>
                

                <!-- Header -->
                <!-- <div v-if="page == 1">
                    <div class="modal-header">
                        <slot name="header">
                            Objective
                        </slot>
                    </div>
                </div>
                <div v-if="page == 2">
                    <div class="modal-header">
                        <slot name="header">
                            Hints
                        </slot>
                    </div>
                </div>
                <div v-if="page == 3">
                    <div class="modal-header">
                        <slot name="header">
                            Found
                        </slot>
                    </div>
                </div>
                <div v-if="page == 4">
                    <div class="modal-header">
                        <slot name="header">
                            Misses
                        </slot>
                    </div>
                </div>
                <div v-if="page == 5">
                    <div class="modal-header">
                        <slot name="header">
                            Enjoy!
                        </slot>
                    </div>
                </div>

                <!-- Body -->
                <!-- <div v-if="page == 1">
                    <div class="modal-body">
                        <slot name="body">
                            Choose an algorithm from the drop-down menu at the top right of page. <br>
                            Note that some algorithms are unweighted, while others are weighted. <br>
                            Unweighted algorithms do not take turns into account, whereas weighted ones do. <br> 
                            Additionally, not all algorithms guarantee the shortest path.
                        </slot>
                    </div>
                </div>
                <div v-if="page == 2">
                    <div class="modal-body">
                        <slot name="body">
                            Click on the grid and move the pointer around the draw a wall.<br>
                            Click the mouse button again to stop drawing.<br>
                            Walls are impenetrable, meaning that a path cannot cross through them.
                        </slot>
                    </div>
                </div>
                <div v-if="page == 3">
                    <div class="modal-body">
                        <slot name="body">
                            Click and drag the start and target nodes to move them.
                        </slot>
                    </div>
                </div>
                <div v-if="page == 4">
                    <div class="modal-body">
                        <slot name="body">
                            Click "Visualize" to see the algorithm working.<br>
                            Click "Instant Path" to get a quick path.
                        </slot>
                    </div>
                </div>
                <div v-if="page == 5">
                    <div class="modal-body">
                        <slot name="body">
                            View this tutorial again by clicking "View Tutorial" on the home page.
                        </slot>
                    </div>
                </div>
                

                <!-- Footer -->
                <!-- <div v-if="page == 1">
                    <div class="modal-footer">
                        <slot name="footer">
                            
                        </slot>
                        <button
                        type="button"
                        class="modal-default-button"
                        @click="next"
                        >
                            Next
                        </button>
                    </div>
                </div>
                <div v-if="page !== 1 && page !==5 ">
                    <div class="modal-footer">
                        <slot name="footer">
                            
                        </slot>
                        <button
                        type="button"
                        class="modal-default-button"
                        @click="back"
                        >
                            Back
                        </button>
                        <button
                        type="button"
                        class="modal-default-button"
                        @click="next"
                        >
                            Next
                        </button>
                    </div>
                </div>
                <div v-if="page == 5">
                    <div class="modal-footer">
                        <slot name="footer">
                            
                        </slot>
                        <button
                        type="button"
                        class="modal-default-button"
                        @click="back"
                        >
                            Back
                        </button>
                        <button
                        type="button"
                        class="modal-default-button"
                        @click="close"
                        >
                            Finish
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div> 
</template> -->

<!-- <script>
  export default {
    name: 'Modal',
    data () {
        return {
            page: 1
        }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      next() {
          if (this.page < 6) {
            this.page++
          }
      },
      back() {
          if (this.page > 1) {
              this.page--
            }
      }
    },
  };
</script> 


<style>
.modal-backdrop {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: table;
  
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  background-color: #fff;
  max-width: 640px;
  width: 70%;
  margin: 0px auto;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow-x: auto;
  flex-direction: column;
  padding: 20px 30px;
  font-family: "Source Sans Pro", sans-serif;
  
}

.modal-header {
    padding: 15px;
    display: flex;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
}

.modal-body {
    display: flex;
    padding: 20px 10px;
    justify-content: center;
    text-align: center;
    font-size: 20px;
}

.modal-footer {
    padding: 15px;
    display: flex;
    justify-content: center;
}

.icon {
    position: relative;
    padding: 10px;
    overflow: hidden;
    align-content: right;
    background-color: white;
}

i {
    right: 0;
    top: 0;
    font-size: 35px;
    cursor: pointer;
}
i:hover {
    color: crimson;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}

.btn-close {
    display: inline-block;
    border: none;
    font-size: 20px;
    padding: 8px 16px;
    cursor: pointer;
    font-weight: bold;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    text-align: center;
    color: #4AAE9B;
    background: transparent;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style> -->