player.onItemInteracted(NETHERITE_PICKAXE, function () {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    NETHERITE_BOOTS,
    1
    )
    loops.pause(1000)
    mobs.enchant(
    mobs.target(LOCAL_PLAYER),
    "Feather_falling",
    4
    )
    loops.pause(1000)
})
player.onItemInteracted(NETHERITE_SHOVEL, function () {
    agent.teleport(pos(0, 100, 0), WEST)
    mobs.teleportToPlayer(
    mobs.target(LOCAL_PLAYER),
    mobs.target(MY_AGENT)
    )
    blocks.place(GLASS, pos(0, -1, 0))
    loops.pause(500)
    blocks.fill(
    RED_WOOL,
    pos(10, -80, 10),
    pos(-10, -40, -10),
    FillOperation.Replace
    )
    loops.pause(250)
    blocks.fill(
    AIR,
    pos(10, -80, 10),
    pos(-10, -40, -10),
    FillOperation.Replace
    )
    blocks.fill(
    RED_WOOL,
    pos(10, -100, 10),
    pos(-10, -61, -10),
    FillOperation.Replace
    )
    blocks.replace(
    AIR,
    RED_WOOL,
    pos(10, -100, 10),
    pos(-10, -62, -10)
    )
    blocks.replace(
    TNT,
    RED_WOOL,
    pos(10, -80, 10),
    pos(-10, -60, -10)
    )
    blocks.fill(
    REDSTONE_BLOCK,
    pos(10, -60, 10),
    pos(-10, -60, -10),
    FillOperation.Replace
    )
})
player.onChat("run", function () {
	
})
player.onItemInteracted(IRON_SHOVEL, function () {
	
})
