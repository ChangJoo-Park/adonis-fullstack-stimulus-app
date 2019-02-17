import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name", "output" ]

  connect () {
    console.log('connected')
  }

  greet() {
    console.log('greeting')
    this.outputTarget.textContent =
      `Hello, ${this.nameTarget.value}!`
  }
}
