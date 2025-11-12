# Upgrade Guide

## Upgrading from v3 to v4

This guide will help you upgrade from `dotswan/filament-grapesjs-v3` (Filament v3) to `vati/filament-grapesjs-v3` (Filament v4).

### Requirements Changes

Before upgrading, ensure your environment meets these new requirements:

- **PHP**: 8.2 or higher (previously 8.1+)
- **Laravel**: 11.28 or higher (previously 10.0+)
- **Filament**: 4.0 or higher (previously 3.0+)

### Installation Steps

#### 1. Update Your Composer Dependencies

First, remove the old package and install the new one:

```bash
composer remove dotswan/filament-grapesjs-v3
composer require vati/filament-grapesjs-v3:"^4.0"
```

#### 2. Update Namespace Imports

The package namespace has changed from `Dotswan\FilamentGrapesjs` to `Vati\FilamentGrapesjs`.

**Before (v3):**
```php
use Dotswan\FilamentGrapesjs\Fields\GrapesJs;
```

**After (v4):**
```php
use Vati\FilamentGrapesjs\Fields\GrapesJs;
```

#### 3. Update Your Code

Search your codebase for all instances of the old namespace and replace them:

**Find:**
```
Dotswan\FilamentGrapesjs
```

**Replace with:**
```
Vati\FilamentGrapesjs
```

You can use your IDE's find-and-replace feature or run this command:

```bash
# On Unix/Linux/macOS
find . -type f -name "*.php" -exec sed -i 's/Dotswan\\FilamentGrapesjs/Vati\\FilamentGrapesjs/g' {} +

# On Windows (PowerShell)
Get-ChildItem -Recurse -Filter *.php | ForEach-Object { (Get-Content $_.FullName) -replace 'Dotswan\\FilamentGrapesjs', 'Vati\\FilamentGrapesjs' | Set-Content $_.FullName }
```

#### 4. Update Form Usage (Filament v4 Changes)

Filament v4 has made some changes to the Form API. Update your resource forms:

**Before (v3):**
```php
use Filament\Resources\Forms\Form;

class PageResource extends Resource
{
    public static function form(Form $form)
    {
        return $form->schema([
            GrapesJs::make('content'),
        ]);
    }
}
```

**After (v4):**
```php
use Filament\Forms\Form;

class PageResource extends Resource
{
    public static function form(Form $form): Form
    {
        return $form->schema([
            GrapesJs::make('content'),
        ]);
    }
}
```

Note the changes:
- Import path changed from `Filament\Resources\Forms\Form` to `Filament\Forms\Form`
- Added return type hint `: Form`

#### 5. Republish Configuration (Optional)

If you published the configuration file, you may want to republish it:

```bash
php artisan vendor:publish --tag="filament-grapesjs-config" --force
```

#### 6. Clear Cache

Clear your application cache:

```bash
php artisan optimize:clear
php artisan filament:upgrade
```

### Breaking Changes

#### Namespace Change

The entire package namespace has changed from `Dotswan\FilamentGrapesjs` to `Vati\FilamentGrapesjs`.

#### Minimum Requirements

- PHP 8.2+ is now required (was 8.1+)
- Laravel 11.28+ is now required (was 10.0+)
- Filament 4.0+ is now required (was 3.0+)

#### Field Wrapper Component

The blade view now uses `x-dynamic-component` with `$getFieldWrapperView()` instead of the hard-coded `x-filament-forms::field-wrapper` component. This provides better compatibility with Filament v4's customization features.

### New Features

#### Improved Type Safety

The package now includes comprehensive PHPDoc annotations and strict type hints throughout:

```php
/**
 * Set the minimum height for the GrapesJS editor.
 *
 * @param  int|Closure|null  $minHeight  The minimum height in pixels
 */
public function minHeight(int | Closure | null $minHeight): static
```

#### Better JavaScript Documentation

The JavaScript Alpine.js component now includes JSDoc comments for better IDE support:

```javascript
/**
 * Initialize the GrapesJS editor
 */
init() {
    // ...
}
```

#### Enhanced Configuration

The configuration file now includes better documentation and examples:

```php
return [
    'assets' => [
        'css' => [
            // 'slug' => 'path/to/css/file.css',
        ],
        'js' => [
            // 'slug' => 'path/to/js/file.js',
        ],
    ],
];
```

### Troubleshooting

#### Class Not Found Error

If you encounter `Class "Dotswan\FilamentGrapesjs\..." not found` errors:

1. Ensure you've updated all namespace imports
2. Run `composer dump-autoload`
3. Clear your cache with `php artisan optimize:clear`

#### Asset Loading Issues

If assets aren't loading properly:

1. Run `php artisan filament:assets`
2. Clear your browser cache
3. Check that your custom assets (if any) are correctly referenced in the config file

#### Livewire State Sync Issues

If the editor content isn't saving properly:

1. Ensure you're using the latest version of Livewire compatible with Filament v4
2. Check your browser console for JavaScript errors
3. Verify that wire:ignore is working correctly

### Testing Your Upgrade

After upgrading, test the following:

1. **Editor loads correctly** - Visit a form with the GrapesJS field
2. **Content saves properly** - Make changes and save the form
3. **Plugins work** - Verify any custom plugins still load
4. **Custom settings apply** - Check that your custom configuration is respected
5. **Read-only mode** - Test disabled state if you use it

### Getting Help

If you encounter issues during the upgrade:

1. Check the [GitHub Issues](https://github.com/vatichild/filament-grapesjs-v3/issues)
2. Review the [Filament v4 Upgrade Guide](https://filamentphp.com/docs/4.x/upgrade-guide)
3. Create a new issue with details about your problem

### Migration Checklist

- [ ] Update PHP to 8.2+
- [ ] Update Laravel to 11.28+
- [ ] Update Filament to 4.0+
- [ ] Remove old package with `composer remove`
- [ ] Install new package with `composer require`
- [ ] Replace all `Dotswan\FilamentGrapesjs` with `Vati\FilamentGrapesjs`
- [ ] Update Form import statements
- [ ] Add return type hints to form methods
- [ ] Republish configuration if needed
- [ ] Clear cache with `php artisan optimize:clear`
- [ ] Run `php artisan filament:upgrade`
- [ ] Test editor functionality
- [ ] Test content saving
- [ ] Test custom plugins
- [ ] Test read-only mode (if used)
- [ ] Deploy and test in production

## Changelog

### Version 4.0.0

**Added:**
- Filament v4 support
- Comprehensive PHPDoc annotations
- Better type safety with strict types
- Improved JavaScript documentation
- Enhanced configuration documentation

**Changed:**
- Namespace changed from `Dotswan\FilamentGrapesjs` to `Vati\FilamentGrapesjs`
- Minimum PHP version: 8.2+ (was 8.1+)
- Minimum Laravel version: 11.28+ (was 10.0+)
- Field wrapper component now uses dynamic component resolution
- Improved code formatting and consistency

**Improved:**
- Better error handling in asset loading
- More descriptive method documentation
- Cleaner JavaScript code with better practices
- Enhanced README with more examples

**Maintained:**
- Full backward compatibility for public APIs
- Same configuration structure
- Same usage patterns for most use cases
