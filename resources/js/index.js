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
                this.waitForDependencies();
            },

            waitForDependencies() {
                if (typeof window.grapesjs === 'undefined') {
                    requestAnimationFrame(() => this.waitForDependencies());
                    return;
                }
                this.$nextTick(() => this.initEditor());
            },

            initEditor() {
                const containerEl = this.$el.querySelector('.grapesjs-wrapper');
                if (!containerEl) {
                    console.error('GrapesJS: Container not found');
                    return;
                }

                // Build i18n config - merge with settings.i18n if present
                const i18nFromSettings = settings.i18n || {};
                const i18nConfig = {
                    ...i18nFromSettings,
                    ...(window.grapejsLocaleRo ? {
                        messages: {
                            ...(i18nFromSettings.messages || {}),
                            ro: window.grapejsLocaleRo,
                        },
                    } : {}),
                };

                // Remove i18n from settings to avoid double-apply
                const { i18n: _, ...restSettings } = settings;

                const editorSettings = {
                    height: `${minHeight}px`,
                    container: containerEl,
                    showOffsets: true,
                    fromElement: true,
                    noticeOnUnload: false,
                    storageManager: false,
                    plugins: plugins,
                    i18n: i18nConfig,
                    ...restSettings,
                };

                // Initialize GrapesJS instance
                this.instance = grapesjs.init(editorSettings);

                // Load custom blocks if available (defined by consuming app)
                if (typeof window.grapejsCustomBlocks === 'function') {
                    window.grapejsCustomBlocks(this.instance);
                }

                // Set up event listener for content updates
                this.instance.on('update', () => {
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
