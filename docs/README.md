New Media Design III 2017-2018
==============================

Opdracht
--------

### Installatie

#### Installatie kloon

```
PS> c
PS> git clone «repository-url» «mapnaam»
PS> c «mapnaam»
PS> git submodule update --init
PS> git submodule foreach 'git checkout tags/v4.0.0'
```

```
PS> c «mapnaam»
PS> bundle update
PS> bundle exec jekyll serve
```

#### Origineel

Als je aan een eigen project Bootstrap als een **Git Submodule** wil toevoegen.

```
PS> c
PS> mkdir «mapnaam»
PS> c «mapnaam»
PS> git init
PS> git submodule add --branch v4-dev https://github.com/twbs/bootstrap/ _vendor/bootstrap
PS> git submodule foreach 'git checkout tags/v4.0.0'
```

### Jekyll-configuratie

In `_config.yml` pas je de `baseurl` aan, van:

```
# Site settings
# ─────────────
baseurl: /1718-nmd3-dossier # the subpath of your site, e.g. /blog
```

naar `«repositorynaam»` (bv. `1718-nmd3-dossier-Bartmi`):

```
# Site settings
# ─────────────
baseurl: /«repositorynaam» # the subpath of your site, e.g. /blog
```

### GitHub Pages Configuratie

Op GitHub ga je naar je repository en klik op **Settings**. Scroll naar beneden tot aan **GitHub Pages**, zet de **Source** op `master branch` en klik op **Save** om te bewaren.

### Voorbeeldsite

 - Basissjabloon <https://gdmgent-1718-nmd2.github.io/1718-nmd2-code-irent>
 - Persoonlijke repo van Bart Missant <https://gdmgent-1718-nmd2.github.io/1718-nmd2-code-irent-Bartmi>