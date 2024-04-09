class GoatCounterIntegrationPlugin {
    constructor(API, name, config) {
        this.API = API;
        this.name = name;
        this.config = config;
    }

    addInsertions() {
        this.API.addInsertion('publiiHead', this.addHeadCode, 1, this);
    }

    addHeadCode(rendererInstance) {
        let scriptToLoad = '';

        if (!rendererInstance.previewMode || this.config.previewMode) {
            const endpoint = this.config.endpoint;
            const visitCounter = this.config.showVisitCounter ? `
                <script>
                    var t = setInterval(function() {
                        if (window.goatcounter && window.goatcounter.visit_count) {
                            clearInterval(t)
                            window.goatcounter.visit_count({
                                append: '${this.config.visitCounterSelector}',
                                type: '${this.config.visitCounterType}',
                                no_branding: ${this.config.noBranding}
                            })
                        }
                    }, 100)
                </script>` : '';

            scriptToLoad = `
                ${visitCounter}
                <script data-goatcounter="${endpoint}"
                        async src="//gc.zgo.at/count.js"></script>
            `;
        }

        return scriptToLoad;
    }
}

module.exports = GoatCounterIntegrationPlugin;
