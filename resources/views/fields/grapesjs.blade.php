@php
    use Filament\Support\Facades\FilamentView;

    $isDisabled = $isDisabled();
    $statePath = $getStatePath();
@endphp

<x-dynamic-component :component="$getFieldWrapperView()" :field="$field">
    <div class="panel__top">
        <div class="panel__basic-actions"></div>
    </div>

    <div
        wire:ignore
        class="filament-grapesjs"
        x-data="grapesjs({
            container: '#gjs_{{ $getId() }}',
            state: $wire.{{ $applyStateBindingModifiers("entangle('{$statePath}')") }},
            statePath: '{{ $statePath }}',
            readOnly: {{ $isDisabled ? 'true' : 'false' }},
            tools: @js($getTools()),
            plugins: @js($getPlugins()),
            settings: @js($getSettings()),
            minHeight: @js($getMinHeight())
        })"
    >
        <div
            id="gjs_{{ $getId() }}"
            class="grapesjs-wrapper"
        >
            {!! $getHtmlData() !!}
        </div>
    </div>

    <div id="blocks"></div>
</x-dynamic-component>
