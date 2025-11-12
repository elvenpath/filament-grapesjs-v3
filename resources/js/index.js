/**
 * GrapesJS Alpine.js Component for Filament
 *
 * This component initializes and manages the GrapesJS editor instance
 * with proper Livewire state synchronization.
 */
document.addEventListener('alpine:init', () => {
    Alpine.data(
        'grapesjs',
        ({ state, statePath, readOnly, tools, minHeight, container, plugins, settings }) => ({
            instance: null,
            state: state,
            tools: tools,
            plugins: plugins,
            settings: settings,

            /**
             * Initialize the GrapesJS editor
             */
            init() {
                const editorSettings = {
                    height: `${minHeight}px`,
                    container: container || '.filament-grapesjs .grapesjs-wrapper',
                    showOffsets: true,
                    fromElement: true,
                    noticeOnUnload: false,
                    storageManager: false,
                    loadHtml: state,
                    plugins: plugins,
                    ...settings,
                };

                // Initialize GrapesJS instance
                this.instance = grapesjs.init(editorSettings);

                // Set up event listener for content updates
                this.instance.on('update', (event) => {
                    this.updateState();
                });

                // Make editor read-only if disabled
                if (readOnly) {
                    this.setReadOnly(true);
                }
            },

            /**
             * Update the state with the current editor content
             */
            updateState() {
                const content = this.instance.getHtml({
                    cleanId: true,
                });

                // Extract content from body tag if present
                const bodyMatch = content.match(/<body\b[^>]*>([\s\S]*?)<\/body>/);

                if (bodyMatch) {
                    this.state = bodyMatch[1];
                } else {
                    this.state = content;
                }
            },

            /**
             * Set the editor to read-only mode
             *
             * @param {boolean} enabled
             */
            setReadOnly(enabled) {
                if (this.instance) {
                    const editor = this.instance.getEditor();
                    if (editor) {
                        editor.setDragMode(enabled ? 'none' : 'translate');
                    }
                }
            },
        })
    );
});
