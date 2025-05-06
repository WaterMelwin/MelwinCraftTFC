



ItemEvents.toolTierRegistry(event => {
    event.add('testtool', tier => {
        tier.uses = 250
        tier.speed = 6.0
        tier.attackDamageBonus = 2.0
        tier.level = 2
        tier.enchantmentValue = 14
        tier.repairIngredient = '#forge:ingots/iron'
    })
})



StartupEvents.registry('item', event => {
    event.create('steelleaf_pickaxe', 'pickaxe').tier('iron')
})