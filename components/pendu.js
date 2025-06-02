app.component("pendu", {
    props: ["step"],
    template: /*html*/ `<div class="pendu">
        <pre>{{ currentStep }}</pre>
    </div>`,
    computed: {
        currentStep() {
            return this.steps[this.step]
          },
    },
    data() {
        return {
            steps: ["\n\n\n\n\n══════",
            " ╔═══╗\n ║\n ║\n ║\n ║\n═╩════", 
            " ╔═══╗\n ║   O\n ║\n ║\n ║\n═╩════", 
            " ╔═══╗\n ║   O\n ║   │\n ║\n ║\n═╩════", 
            " ╔═══╗\n ║   O\n ║  \\│\n ║\n ║\n═╩════", 
            " ╔═══╗\n ║   O\n ║  \\│/\n ║\n ║\n═╩════", 
            " ╔═══╗\n ║   O\n ║  \\│/\n ║  /\n ║\n═╩════", 
            " ╔═══╗\n ║   O\n ║  \\│/\n ║  / \\\n ║\n═╩════"],
        }
    }
  });