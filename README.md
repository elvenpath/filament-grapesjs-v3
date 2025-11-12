# Filament GrapesJS v4

[![Latest Version on Packagist][ico-version]][link-packagist]
[![Total Downloads][ico-downloads]][link-downloads]
[![Software License][ico-license]][link-license]

![image](https://github.com/vatichild/filament-grapesjs-v3/assets/20874565/2ad36e55-4d56-42f6-8946-b894dab5d4fa)

## Introduction

A powerful GrapesJS integration for Filament v4 that provides a visual HTML editor with drag-and-drop functionality. This package allows you to add rich HTML content editing capabilities to your Filament forms with ease.

### Features

- 🎨 **Visual HTML Editor** - Drag-and-drop interface for designing HTML content
- 🔌 **Plugin Support** - Easy integration with GrapesJS plugins (includes Tailwind CSS support)
- ⚙️ **Highly Configurable** - Customize tools, plugins, and editor settings
- 🎯 **Filament v4 Compatible** - Built specifically for Filament v4 with PHP 8.2+ support
- 📱 **Responsive** - Works seamlessly across different screen sizes
- 💾 **State Management** - Automatic state synchronization with Livewire

## Requirements

- PHP 8.2 or higher
- Laravel 11.28 or higher
- Filament v4.0 or higher

## Installation

Install the package via Composer:

```bash
composer require vati/filament-grapesjs-v3
```

Publish the configuration file (optional):

```bash
php artisan vendor:publish --tag="filament-grapesjs-config"
```

## Basic Usage

### Simple Example

```php
<?php

namespace App\Filament\Resources;

use Filament\Forms\Form;
use Filament\Resources\Resource;
use Vati\FilamentGrapesjs\Fields\GrapesJs;

class PageResource extends Resource
{
    public static function form(Form $form): Form
    {
        return $form->schema([
            GrapesJs::make('content')
                ->label('Page Content')
                ->required(),
        ]);
    }
}
```

### Advanced Example

```php
<?php

namespace App\Filament\Resources;

use Filament\Forms\Form;
use Filament\Resources\Resource;
use Vati\FilamentGrapesjs\Fields\GrapesJs;

class PageResource extends Resource
{
    public static function form(Form $form): Form
    {
        return $form->schema([
            GrapesJs::make('content')
                ->label('Page Content')
                ->helperText('Design your page using drag-and-drop')
                ->required()
                ->minHeight(600)
                ->tools([
                    // Specify which tools to show in the editor toolbar
                ])
                ->plugins([
                    'grapesjs-tailwind',
                    // Add more GrapesJS plugins here
                ])
                ->settings([
                    'storageManager' => [
                        'type' => 'local',
                        'options' => [
                            'local' => [
                                'key' => 'gjs-project',
                            ],
                        ],
                    ],
                    'styleManager' => [
                        'sectors' => [
                            [
                                'name' => 'General',
                                'open' => false,
                                'buildProps' => [
                                    'background-color',
                                    'color',
                                    'font-size',
                                    'font-weight',
                                ],
                            ],
                            [
                                'name' => 'Layout',
                                'open' => false,
                                'buildProps' => [
                                    'width',
                                    'height',
                                    'padding',
                                    'margin',
                                    'display',
                                ],
                            ],
                        ],
                    ],
                    'deviceManager' => [
                        'devices' => [
                            [
                                'name' => 'Desktop',
                                'width' => '',
                            ],
                            [
                                'name' => 'Tablet',
                                'width' => '768px',
                            ],
                            [
                                'name' => 'Mobile',
                                'width' => '375px',
                            ],
                        ],
                    ],
                ]),
        ]);
    }
}
```

## Configuration

### Available Methods

#### `minHeight(int|Closure|null $minHeight)`

Set the minimum height of the editor in pixels.

```php
GrapesJs::make('content')
    ->minHeight(800)
```

#### `tools(array|Closure $tools)`

Define which tools should be available in the editor toolbar.

```php
GrapesJs::make('content')
    ->tools([
        'sw-visibility',
        'preview',
        'fullscreen',
        'export-template',
    ])
```

#### `plugins(array|Closure $plugins)`

Specify which GrapesJS plugins to load.

```php
GrapesJs::make('content')
    ->plugins([
        'grapesjs-tailwind',
        'grapesjs-blocks-basic',
    ])
```

#### `settings(array|Closure $settings)`

Pass custom configuration to the GrapesJS instance.

```php
GrapesJs::make('content')
    ->settings([
        'canvas' => [
            'styles' => ['https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css'],
        ],
    ])
```

### Custom Assets

You can register custom CSS and JavaScript assets in the configuration file:

```php
// config/filament-grapesjs.php

return [
    'assets' => [
        'css' => [
            'custom-styles' => 'css/grapesjs-custom.css',
        ],
        'js' => [
            'custom-plugin' => 'js/grapesjs-plugins/my-plugin.js',
        ],
    ],
];
```

After adding custom assets, run:

```bash
php artisan filament:assets
```

## License

[MIT License](LICENSE.md) © Vati

## Security

We take security seriously. If you discover any bugs or security issues, please help us maintain a secure project by reporting them through our [`GitHub issue tracker`][link-github-issue].

## Contribution

We welcome contributions! contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


[ico-version]: https://img.shields.io/packagist/v/vati/filament-grapesjs-v3.svg?style=flat-square
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[ico-downloads]: https://img.shields.io/packagist/dt/vati/filament-grapesjs-v3.svg?style=flat-square

[link-packagist]: https://packagist.org/packages/vati/filament-grapesjs-v3
[link-license]: https://github.com/vatichild/filament-grapesjs-v3/blob/master/LICENSE.md
[link-downloads]: https://packagist.org/packages/vati/filament-grapesjs-v3
[link-readme]: https://github.com/vatichild/filament-grapesjs-v3/blob/master/README.md
[link-github-issue]: https://github.com/vatichild/filament-grapesjs-v3/issues
[link-composer-json]: https://github.com/vatichild/filament-grapesjs-v3/blob/master/composer.json
[link-gitignore]: https://github.com/vatichild/filament-grapesjs-v3/blob/master/.gitignore
[link-pint]: https://github.com/vatichild/filament-grapesjs-v3/blob/master/pint.json
[link-author]: https://github.com/vatichild
