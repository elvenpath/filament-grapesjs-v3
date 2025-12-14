<?php

declare(strict_types=1);

namespace Vati\FilamentGrapesjs\Fields;

use Closure;
use Filament\Forms\Components\Field;
use Filament\Schemas\Concerns\HasStateBindingModifiers;
use Vati\FilamentGrapesjs\Fields\Concerns\InteractsWithTools;

/**
 * GrapesJS Field Component for Filament.
 *
 * This field integrates the GrapesJS visual HTML editor into Filament forms,
 * allowing users to design HTML content with drag-and-drop functionality.
 */
class GrapesJs extends Field
{
    use HasStateBindingModifiers;
    use InteractsWithTools;

    protected string $view = 'filament-grapesjs::fields.grapesjs';

    protected int | Closure | null $minHeight = 768;

    /**
     * Set the minimum height for the GrapesJS editor.
     *
     * @param  int|Closure|null  $minHeight  The minimum height in pixels
     */
    public function minHeight(int | Closure | null $minHeight): static
    {
        $this->minHeight = $minHeight;

        return $this;
    }

    /**
     * Get the minimum height for the GrapesJS editor.
     */
    public function getMinHeight(): ?int
    {
        return $this->evaluate($this->minHeight);
    }

    /**
     * Get the HTML data from the current state.
     */
    public function getHtmlData(): mixed
    {
        return $this->evaluate($this->getState());
    }

    /**
     * Set the tools to be available in the GrapesJS editor.
     *
     * @param  array<string>|Closure  $tools  Array of tool names
     */
    public function tools(array | Closure $tools): static
    {
        $this->tools = $tools;

        return $this;
    }

    /**
     * Set the plugins to be loaded in the GrapesJS editor.
     *
     * @param  array<string>|Closure  $plugins  Array of plugin names
     */
    public function plugins(array | Closure $plugins): static
    {
        $this->plugins = $plugins;

        return $this;
    }

    /**
     * Set custom settings for the GrapesJS editor.
     *
     * @param  array<string, mixed>|Closure  $settings  Configuration array
     */
    public function settings(array | Closure $settings): static
    {
        $this->settings = $settings;

        return $this;
    }
}
