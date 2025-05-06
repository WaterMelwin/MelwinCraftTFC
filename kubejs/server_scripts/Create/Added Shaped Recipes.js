ServerEvents.recipes(event => {
    event.shaped(
        Item.of('create:rose_quartz', 1),
        [
            ' B ',
            'BAB',
            ' B '
        ],
        {
            A: 'minecraft:quartz',
            B: 'minecraft:redstone',
        }
        )
    event.shaped(
        Item.of('create:electron_tube', 1),
         [
            'EDE',
            'ABA',
            'ACA'
         ],
         {
            A: 'minecraft:stick',
            B: '#forge:tfc_plank',
            C: 'tfc:metal/ingot/copper',
            D: 'create:polished_rose_quartz',
            E: 'extendedcrafting:basic_component',
        }
        )
        })