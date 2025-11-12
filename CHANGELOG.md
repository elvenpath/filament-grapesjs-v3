# Changelog

All notable changes to `filament-grapesjs-v3` will be documented in this file.

## 4.0.0 - 2025-01-XX

### Added
- **Filament v4 Support** - Full compatibility with Filament v4.0+
- **Enhanced Type Safety** - Comprehensive PHPDoc annotations throughout the codebase
- **Strict Type Declarations** - Added `declare(strict_types=1)` to all PHP files
- **Improved Documentation** - Better inline documentation for all methods and properties
- **JavaScript Documentation** - Added JSDoc comments for better IDE support
- **Enhanced Configuration** - Improved config file with detailed examples and comments
- **UPGRADE.md** - Comprehensive upgrade guide for migrating from v3 to v4

### Changed
- **Namespace Change** - Package namespace changed from `Dotswan\FilamentGrapesjs` to `Vati\FilamentGrapesjs`
- **Minimum PHP Version** - Now requires PHP 8.2+ (previously 8.1+)
- **Minimum Laravel Version** - Now requires Laravel 11.28+ (previously 10.0+)
- **Minimum Filament Version** - Now requires Filament 4.0+ (previously 3.0+)
- **Field Wrapper** - Updated blade view to use `x-dynamic-component` for better Filament v4 compatibility
- **Asset Loading** - Improved asset loading with better validation and error handling
- **Code Style** - Updated to follow Laravel and Filament v4 coding standards

### Improved
- **JavaScript Component** - Refactored Alpine.js component with better structure and readability
- **State Management** - Enhanced state synchronization with Livewire
- **Error Handling** - Better handling of missing files in custom asset loading
- **Code Quality** - Consistent formatting and improved code organization
- **README** - Completely rewritten with comprehensive examples and better structure

### Maintained
- **API Compatibility** - Public API remains consistent for easy migration
- **Configuration Structure** - Config file structure unchanged for backward compatibility
- **Usage Patterns** - Field usage remains familiar for existing users

### Fixed
- Various minor code quality improvements
- Improved type hints for better IDE support

## 3.0.0 - 2024-XX-XX

### Added
- Initial release for Filament v3
- GrapesJS visual HTML editor integration
- Support for custom tools, plugins, and settings
- Tailwind CSS plugin integration
- Customizable editor height
- State synchronization with Livewire

## 1.0.0 - 202X-XX-XX

- Initial release
