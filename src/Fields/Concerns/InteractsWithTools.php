<?php

declare(strict_types=1);

namespace Vati\FilamentGrapesjs\Fields\Concerns;

use Closure;

/**
 * Trait for interacting with GrapesJS tools, plugins, and settings.
 */
trait InteractsWithTools
{
    /**
     * Tools configuration.
     *
     * @var array<string>|Closure
     */
    protected array | Closure $tools = [];

    /**
     * Plugins configuration.
     *
     * @var array<string>|Closure
     */
    protected array | Closure $plugins = [
        'gjs-blocks-basic',
        'grapesjs-tailwind',
    ];

    /**
     * Settings configuration.
     *
     * @var array<string, mixed>|Closure
     */
    protected array | Closure $settings = [];

    /**
     * Get the configured tools.
     *
     * @return array<string>
     */
    public function getTools(): array
    {
        return $this->evaluate($this->tools);
    }

    /**
     * Get the configured plugins.
     *
     * @return array<string>
     */
    public function getPlugins(): array
    {
        return $this->evaluate($this->plugins);
    }

    /**
     * Get the configured settings.
     *
     * @return array<string, mixed>
     */
    public function getSettings(): array
    {
        return $this->evaluate($this->settings);
    }
}
