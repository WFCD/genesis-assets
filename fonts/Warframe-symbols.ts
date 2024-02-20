export type WarframeSymbolsId =
  | "arbitrations"
  | "archwing"
  | "entrati"
  | "factions-corpus"
  | "factions-corrupted"
  | "factions-grineer"
  | "factions-infested"
  | "factions-narmer"
  | "factions-narmer2"
  | "factions-sentient"
  | "fissures-1"
  | "fissures-2"
  | "fissures-3"
  | "fissures-4"
  | "fissures-5"
  | "hexis"
  | "kuva-kuva"
  | "kuva-kuvaflood"
  | "loading"
  | "menu-All"
  | "menu-Amp"
  | "menu-Arcane"
  | "menu-Archwing"
  | "menu-ArchwingColour"
  | "menu-ArchwingEmblem"
  | "menu-ArchwingPrimary"
  | "menu-ArchwingSecondary"
  | "menu-Armor"
  | "menu-Augment"
  | "menu-Aura"
  | "menu-Avionics"
  | "menu-AvionicsDefensive"
  | "menu-AvionicsOffensive"
  | "menu-AvionicsSuper"
  | "menu-AvionicsTactical"
  | "menu-Barracks"
  | "menu-Bile"
  | "menu-Biotics"
  | "menu-Blueprint"
  | "menu-Build"
  | "menu-Calx"
  | "menu-Capacity"
  | "menu-Cephalon"
  | "menu-CetusElder"
  | "menu-ChangeSkins"
  | "menu-ClanObstacleCourse"
  | "menu-Command"
  | "menu-Connector"
  | "menu-Corpus"
  | "menu-CraftingAmpBrace"
  | "menu-CraftingAmpPrism"
  | "menu-CraftingAmpScaffold"
  | "menu-CraftingHoundBody"
  | "menu-CraftingHoundHead"
  | "menu-CraftingHoundLegs"
  | "menu-CraftingHoundTail"
  | "menu-CraftingKDriveBoard"
  | "menu-CraftingKDriveJet"
  | "menu-CraftingKDriveNose"
  | "menu-CraftingKDriveReactor"
  | "menu-CraftingKitgunChamber"
  | "menu-CraftingKitgunGrip"
  | "menu-CraftingKitgunLoader"
  | "menu-CraftingKitgunPrimaryGrip"
  | "menu-CraftingMoaBrackets"
  | "menu-CraftingMoaCore"
  | "menu-CraftingMoaGyro"
  | "menu-CraftingMoaModel"
  | "menu-Displays"
  | "menu-Drone"
  | "menu-Duplicate"
  | "menu-Emotes"
  | "menu-Energy"
  | "menu-Engineering"
  | "menu-Entrati"
  | "menu-Equip"
  | "menu-Exilus"
  | "menu-Favorite"
  | "menu-FishLarge"
  | "menu-FishMedium"
  | "menu-FishSmall"
  | "menu-Fusion"
  | "menu-Fx"
  | "menu-Gara"
  | "menu-Garden"
  | "menu-Gear"
  | "menu-GearWheel"
  | "menu-GeneticImprint"
  | "menu-Ghouls"
  | "menu-Gift"
  | "menu-Glyph"
  | "menu-Grineer"
  | "menu-Grip"
  | "menu-Gunnery"
  | "menu-Hall"
  | "menu-Incomplete"
  | "menu-IndividualObstacleCourse"
  | "menu-Infested"
  | "menu-Kavat"
  | "menu-Keys"
  | "menu-Kubrow"
  | "menu-KuvaLichActive"
  | "menu-KuvaLichConverted"
  | "menu-KuvaLichTraded"
  | "menu-KuvaLichVanquished"
  | "menu-Lab"
  | "menu-LichCategory"
  | "menu-LimitedTime"
  | "menu-Link"
  | "menu-LotusEmblem"
  | "menu-ManufacturerLavan"
  | "menu-ManufacturerSigma"
  | "menu-ManufacturerVidar"
  | "menu-ManufacturerZekti"
  | "menu-Materials"
  | "menu-MaterialsOff"
  | "menu-Mech"
  | "menu-MechBoard"
  | "menu-Melee"
  | "menu-Misc"
  | "menu-MkI"
  | "menu-MkII"
  | "menu-MkIII"
  | "menu-Mods"
  | "menu-ModularItem"
  | "menu-Natural"
  | "menu-Noggles"
  | "menu-Operator"
  | "menu-OrokinOn"
  | "menu-OwnedBlueprint"
  | "menu-Oxides"
  | "menu-Parazon"
  | "menu-ParazonLong"
  | "menu-ParazonLongShadow"
  | "menu-ParazonLongShadow2"
  | "menu-Pheromones"
  | "menu-Pilot"
  | "menu-Pistol"
  | "menu-PlayerShip"
  | "menu-PrexCategory"
  | "menu-PrimaryWeaponBow"
  | "menu-PrimaryWeaponLauncher"
  | "menu-PrimaryWeaponRifle"
  | "menu-PrimaryWeaponShotgun"
  | "menu-PrimaryWeaponSniper"
  | "menu-PrimaryWeaponSpeargun"
  | "menu-PrimaryWeaponSpecial"
  | "menu-PrimeParts"
  | "menu-Prospector"
  | "menu-Purchase"
  | "menu-QuestPickerActive"
  | "menu-QuestPickerCompleted"
  | "menu-QuestPickerMystery"
  | "menu-Railjack"
  | "menu-Railjack2"
  | "menu-RailjackAbilities"
  | "menu-RailjackCountermeasures"
  | "menu-RailjackOrdnance"
  | "menu-RailjackPilot"
  | "menu-RailjackTurrets"
  | "menu-RelatedItems"
  | "menu-Relic"
  | "menu-RelicAxi"
  | "menu-RelicLith"
  | "menu-RelicMeso"
  | "menu-RelicNeo"
  | "menu-RequiemMod"
  | "menu-RequiemRelic"
  | "menu-RequirementsMet"
  | "menu-ResearchCorpus"
  | "menu-ResearchGrineer"
  | "menu-ResearchInfested"
  | "menu-ResearchOrokin"
  | "menu-ResearchRailjack"
  | "menu-ResearchTenno"
  | "menu-ResourceDrone"
  | "menu-Rifle"
  | "menu-RifleOff"
  | "menu-RivenMod"
  | "menu-RoundVial"
  | "menu-Salvage"
  | "menu-Sentinel"
  | "menu-Shotgun"
  | "menu-Sigils"
  | "menu-Simaris"
  | "menu-Skins"
  | "menu-Solaris"
  | "menu-SquareVial"
  | "menu-Stance"
  | "menu-Strike"
  | "menu-Swatch"
  | "menu-Synthetics"
  | "menu-Synthetics2"
  | "menu-Tactical"
  | "menu-Teleport"
  | "menu-Tenets"
  | "menu-Utility"
  | "menu-Utility2"
  | "menu-VehiclesKdrive"
  | "menu-Warframe"
  | "menu-WarframeOff"
  | "menu-Weapons"
  | "menu-Wild"
  | "menu-WoundedInfestedCritter"
  | "menu-WoundedInfestedPredator"
  | "nightmare"
  | "nightwave"
  | "ostron"
  | "sigils-Arbiters-of-Hexis-ArbitersLevel1"
  | "sigils-Arbiters-of-Hexis-ArbitersLevel2"
  | "sigils-Arbiters-of-Hexis-ArbitersLevel3"
  | "sigils-Arbiters-of-Hexis-ArbitersLevel4"
  | "sigils-Arbiters-of-Hexis-ArbitersLevel5"
  | "sigils-Cephalon-Suda-CephalonSudaLevel1"
  | "sigils-Cephalon-Suda-CephalonSudaLevel2"
  | "sigils-Cephalon-Suda-CephalonSudaLevel3"
  | "sigils-Cephalon-Suda-CephalonSudaLevel4"
  | "sigils-Cephalon-Suda-CephalonSudaLevel5"
  | "sigils-Entrati-EntratiLevel1"
  | "sigils-Entrati-EntratiLevel2"
  | "sigils-Entrati-EntratiLevel3"
  | "sigils-Entrati-EntratiLevel4"
  | "sigils-Entrati-EntratiLevel5"
  | "sigils-Necraloid-NecraloidLevel1"
  | "sigils-Necraloid-NecraloidLevel2"
  | "sigils-Necraloid-NecraloidLevel3"
  | "sigils-NegativeRank1"
  | "sigils-NegativeRank2"
  | "sigils-Neutral"
  | "sigils-New-Loka-NewLokaLevel1"
  | "sigils-New-Loka-NewLokaLevel2"
  | "sigils-New-Loka-NewLokaLevel3"
  | "sigils-New-Loka-NewLokaLevel4"
  | "sigils-New-Loka-NewLokaLevel5"
  | "sigils-Ostron-OstronLevel1"
  | "sigils-Ostron-OstronLevel2"
  | "sigils-Ostron-OstronLevel3"
  | "sigils-Ostron-OstronLevel4"
  | "sigils-Ostron-OstronLevel5"
  | "sigils-Red-Veil-RedVeilLevel1"
  | "sigils-Red-Veil-RedVeilLevel2"
  | "sigils-Red-Veil-RedVeilLevel3"
  | "sigils-Red-Veil-RedVeilLevel4"
  | "sigils-Red-Veil-RedVeilLevel5"
  | "sigils-Solaris-United-SolarisLevel1"
  | "sigils-Solaris-United-SolarisLevel2"
  | "sigils-Solaris-United-SolarisLevel3"
  | "sigils-Solaris-United-SolarisLevel4"
  | "sigils-Solaris-United-SolarisLevel5"
  | "sigils-Steel-Meridian-SteelMeridianLevel1"
  | "sigils-Steel-Meridian-SteelMeridianLevel2"
  | "sigils-Steel-Meridian-SteelMeridianLevel3"
  | "sigils-Steel-Meridian-SteelMeridianLevel4"
  | "sigils-Steel-Meridian-SteelMeridianLevel5"
  | "sigils-The-Holdfasts-HoldfastsLevel1"
  | "sigils-The-Holdfasts-HoldfastsLevel2"
  | "sigils-The-Holdfasts-HoldfastsLevel3"
  | "sigils-The-Holdfasts-HoldfastsLevel4"
  | "sigils-The-Holdfasts-HoldfastsLevel5"
  | "sigils-The-Perrin-Sequence-PerrinLevel1"
  | "sigils-The-Perrin-Sequence-PerrinLevel2"
  | "sigils-The-Perrin-Sequence-PerrinLevel3"
  | "sigils-The-Perrin-Sequence-PerrinLevel4"
  | "sigils-The-Perrin-Sequence-PerrinLevel5"
  | "sigils-The-Quills-QuillsLevel1"
  | "sigils-The-Quills-QuillsLevel2"
  | "sigils-The-Quills-QuillsLevel3"
  | "sigils-The-Quills-QuillsLevel4"
  | "sigils-The-Quills-QuillsLevel5"
  | "sigils-VentKids-VentKidsLevel1"
  | "sigils-VentKids-VentKidsLevel2"
  | "sigils-VentKids-VentKidsLevel3"
  | "sigils-VentKids-VentKidsLevel4"
  | "sigils-VentKids-VentKidsLevel5"
  | "sigils-Vox-Solaris-VoxLevel1"
  | "sigils-Vox-Solaris-VoxLevel2"
  | "sigils-Vox-Solaris-VoxLevel3"
  | "sigils-Vox-Solaris-VoxLevel4"
  | "sigils-Vox-Solaris-VoxLevel5"
  | "simaris"
  | "solaris"
  | "sp-logo"
  | "standing"
  | "wfcd";

export type WarframeSymbolsKey =
  | "Arbitrations"
  | "Archwing"
  | "Entrati"
  | "FactionsCorpus"
  | "FactionsCorrupted"
  | "FactionsGrineer"
  | "FactionsInfested"
  | "FactionsNarmer"
  | "FactionsNarmer2"
  | "FactionsSentient"
  | "Fissures_1"
  | "Fissures_2"
  | "Fissures_3"
  | "Fissures_4"
  | "Fissures_5"
  | "Hexis"
  | "KuvaKuva"
  | "KuvaKuvaflood"
  | "Loading"
  | "MenuAll"
  | "MenuAmp"
  | "MenuArcane"
  | "MenuArchwing"
  | "MenuArchwingColour"
  | "MenuArchwingEmblem"
  | "MenuArchwingPrimary"
  | "MenuArchwingSecondary"
  | "MenuArmor"
  | "MenuAugment"
  | "MenuAura"
  | "MenuAvionics"
  | "MenuAvionicsDefensive"
  | "MenuAvionicsOffensive"
  | "MenuAvionicsSuper"
  | "MenuAvionicsTactical"
  | "MenuBarracks"
  | "MenuBile"
  | "MenuBiotics"
  | "MenuBlueprint"
  | "MenuBuild"
  | "MenuCalx"
  | "MenuCapacity"
  | "MenuCephalon"
  | "MenuCetusElder"
  | "MenuChangeSkins"
  | "MenuClanObstacleCourse"
  | "MenuCommand"
  | "MenuConnector"
  | "MenuCorpus"
  | "MenuCraftingAmpBrace"
  | "MenuCraftingAmpPrism"
  | "MenuCraftingAmpScaffold"
  | "MenuCraftingHoundBody"
  | "MenuCraftingHoundHead"
  | "MenuCraftingHoundLegs"
  | "MenuCraftingHoundTail"
  | "MenuCraftingKDriveBoard"
  | "MenuCraftingKDriveJet"
  | "MenuCraftingKDriveNose"
  | "MenuCraftingKDriveReactor"
  | "MenuCraftingKitgunChamber"
  | "MenuCraftingKitgunGrip"
  | "MenuCraftingKitgunLoader"
  | "MenuCraftingKitgunPrimaryGrip"
  | "MenuCraftingMoaBrackets"
  | "MenuCraftingMoaCore"
  | "MenuCraftingMoaGyro"
  | "MenuCraftingMoaModel"
  | "MenuDisplays"
  | "MenuDrone"
  | "MenuDuplicate"
  | "MenuEmotes"
  | "MenuEnergy"
  | "MenuEngineering"
  | "MenuEntrati"
  | "MenuEquip"
  | "MenuExilus"
  | "MenuFavorite"
  | "MenuFishLarge"
  | "MenuFishMedium"
  | "MenuFishSmall"
  | "MenuFusion"
  | "MenuFx"
  | "MenuGara"
  | "MenuGarden"
  | "MenuGear"
  | "MenuGearWheel"
  | "MenuGeneticImprint"
  | "MenuGhouls"
  | "MenuGift"
  | "MenuGlyph"
  | "MenuGrineer"
  | "MenuGrip"
  | "MenuGunnery"
  | "MenuHall"
  | "MenuIncomplete"
  | "MenuIndividualObstacleCourse"
  | "MenuInfested"
  | "MenuKavat"
  | "MenuKeys"
  | "MenuKubrow"
  | "MenuKuvaLichActive"
  | "MenuKuvaLichConverted"
  | "MenuKuvaLichTraded"
  | "MenuKuvaLichVanquished"
  | "MenuLab"
  | "MenuLichCategory"
  | "MenuLimitedTime"
  | "MenuLink"
  | "MenuLotusEmblem"
  | "MenuManufacturerLavan"
  | "MenuManufacturerSigma"
  | "MenuManufacturerVidar"
  | "MenuManufacturerZekti"
  | "MenuMaterials"
  | "MenuMaterialsOff"
  | "MenuMech"
  | "MenuMechBoard"
  | "MenuMelee"
  | "MenuMisc"
  | "MenuMkI"
  | "MenuMkIi"
  | "MenuMkIii"
  | "MenuMods"
  | "MenuModularItem"
  | "MenuNatural"
  | "MenuNoggles"
  | "MenuOperator"
  | "MenuOrokinOn"
  | "MenuOwnedBlueprint"
  | "MenuOxides"
  | "MenuParazon"
  | "MenuParazonLong"
  | "MenuParazonLongShadow"
  | "MenuParazonLongShadow2"
  | "MenuPheromones"
  | "MenuPilot"
  | "MenuPistol"
  | "MenuPlayerShip"
  | "MenuPrexCategory"
  | "MenuPrimaryWeaponBow"
  | "MenuPrimaryWeaponLauncher"
  | "MenuPrimaryWeaponRifle"
  | "MenuPrimaryWeaponShotgun"
  | "MenuPrimaryWeaponSniper"
  | "MenuPrimaryWeaponSpeargun"
  | "MenuPrimaryWeaponSpecial"
  | "MenuPrimeParts"
  | "MenuProspector"
  | "MenuPurchase"
  | "MenuQuestPickerActive"
  | "MenuQuestPickerCompleted"
  | "MenuQuestPickerMystery"
  | "MenuRailjack"
  | "MenuRailjack2"
  | "MenuRailjackAbilities"
  | "MenuRailjackCountermeasures"
  | "MenuRailjackOrdnance"
  | "MenuRailjackPilot"
  | "MenuRailjackTurrets"
  | "MenuRelatedItems"
  | "MenuRelic"
  | "MenuRelicAxi"
  | "MenuRelicLith"
  | "MenuRelicMeso"
  | "MenuRelicNeo"
  | "MenuRequiemMod"
  | "MenuRequiemRelic"
  | "MenuRequirementsMet"
  | "MenuResearchCorpus"
  | "MenuResearchGrineer"
  | "MenuResearchInfested"
  | "MenuResearchOrokin"
  | "MenuResearchRailjack"
  | "MenuResearchTenno"
  | "MenuResourceDrone"
  | "MenuRifle"
  | "MenuRifleOff"
  | "MenuRivenMod"
  | "MenuRoundVial"
  | "MenuSalvage"
  | "MenuSentinel"
  | "MenuShotgun"
  | "MenuSigils"
  | "MenuSimaris"
  | "MenuSkins"
  | "MenuSolaris"
  | "MenuSquareVial"
  | "MenuStance"
  | "MenuStrike"
  | "MenuSwatch"
  | "MenuSynthetics"
  | "MenuSynthetics2"
  | "MenuTactical"
  | "MenuTeleport"
  | "MenuTenets"
  | "MenuUtility"
  | "MenuUtility2"
  | "MenuVehiclesKdrive"
  | "MenuWarframe"
  | "MenuWarframeOff"
  | "MenuWeapons"
  | "MenuWild"
  | "MenuWoundedInfestedCritter"
  | "MenuWoundedInfestedPredator"
  | "Nightmare"
  | "Nightwave"
  | "Ostron"
  | "SigilsArbitersOfHexisArbitersLevel1"
  | "SigilsArbitersOfHexisArbitersLevel2"
  | "SigilsArbitersOfHexisArbitersLevel3"
  | "SigilsArbitersOfHexisArbitersLevel4"
  | "SigilsArbitersOfHexisArbitersLevel5"
  | "SigilsCephalonSudaCephalonSudaLevel1"
  | "SigilsCephalonSudaCephalonSudaLevel2"
  | "SigilsCephalonSudaCephalonSudaLevel3"
  | "SigilsCephalonSudaCephalonSudaLevel4"
  | "SigilsCephalonSudaCephalonSudaLevel5"
  | "SigilsEntratiEntratiLevel1"
  | "SigilsEntratiEntratiLevel2"
  | "SigilsEntratiEntratiLevel3"
  | "SigilsEntratiEntratiLevel4"
  | "SigilsEntratiEntratiLevel5"
  | "SigilsNecraloidNecraloidLevel1"
  | "SigilsNecraloidNecraloidLevel2"
  | "SigilsNecraloidNecraloidLevel3"
  | "SigilsNegativeRank1"
  | "SigilsNegativeRank2"
  | "SigilsNeutral"
  | "SigilsNewLokaNewLokaLevel1"
  | "SigilsNewLokaNewLokaLevel2"
  | "SigilsNewLokaNewLokaLevel3"
  | "SigilsNewLokaNewLokaLevel4"
  | "SigilsNewLokaNewLokaLevel5"
  | "SigilsOstronOstronLevel1"
  | "SigilsOstronOstronLevel2"
  | "SigilsOstronOstronLevel3"
  | "SigilsOstronOstronLevel4"
  | "SigilsOstronOstronLevel5"
  | "SigilsRedVeilRedVeilLevel1"
  | "SigilsRedVeilRedVeilLevel2"
  | "SigilsRedVeilRedVeilLevel3"
  | "SigilsRedVeilRedVeilLevel4"
  | "SigilsRedVeilRedVeilLevel5"
  | "SigilsSolarisUnitedSolarisLevel1"
  | "SigilsSolarisUnitedSolarisLevel2"
  | "SigilsSolarisUnitedSolarisLevel3"
  | "SigilsSolarisUnitedSolarisLevel4"
  | "SigilsSolarisUnitedSolarisLevel5"
  | "SigilsSteelMeridianSteelMeridianLevel1"
  | "SigilsSteelMeridianSteelMeridianLevel2"
  | "SigilsSteelMeridianSteelMeridianLevel3"
  | "SigilsSteelMeridianSteelMeridianLevel4"
  | "SigilsSteelMeridianSteelMeridianLevel5"
  | "SigilsTheHoldfastsHoldfastsLevel1"
  | "SigilsTheHoldfastsHoldfastsLevel2"
  | "SigilsTheHoldfastsHoldfastsLevel3"
  | "SigilsTheHoldfastsHoldfastsLevel4"
  | "SigilsTheHoldfastsHoldfastsLevel5"
  | "SigilsThePerrinSequencePerrinLevel1"
  | "SigilsThePerrinSequencePerrinLevel2"
  | "SigilsThePerrinSequencePerrinLevel3"
  | "SigilsThePerrinSequencePerrinLevel4"
  | "SigilsThePerrinSequencePerrinLevel5"
  | "SigilsTheQuillsQuillsLevel1"
  | "SigilsTheQuillsQuillsLevel2"
  | "SigilsTheQuillsQuillsLevel3"
  | "SigilsTheQuillsQuillsLevel4"
  | "SigilsTheQuillsQuillsLevel5"
  | "SigilsVentKidsVentKidsLevel1"
  | "SigilsVentKidsVentKidsLevel2"
  | "SigilsVentKidsVentKidsLevel3"
  | "SigilsVentKidsVentKidsLevel4"
  | "SigilsVentKidsVentKidsLevel5"
  | "SigilsVoxSolarisVoxLevel1"
  | "SigilsVoxSolarisVoxLevel2"
  | "SigilsVoxSolarisVoxLevel3"
  | "SigilsVoxSolarisVoxLevel4"
  | "SigilsVoxSolarisVoxLevel5"
  | "Simaris"
  | "Solaris"
  | "SpLogo"
  | "Standing"
  | "Wfcd";

export enum WarframeSymbols {
  Arbitrations = "arbitrations",
  Archwing = "archwing",
  Entrati = "entrati",
  FactionsCorpus = "factions-corpus",
  FactionsCorrupted = "factions-corrupted",
  FactionsGrineer = "factions-grineer",
  FactionsInfested = "factions-infested",
  FactionsNarmer = "factions-narmer",
  FactionsNarmer2 = "factions-narmer2",
  FactionsSentient = "factions-sentient",
  Fissures_1 = "fissures-1",
  Fissures_2 = "fissures-2",
  Fissures_3 = "fissures-3",
  Fissures_4 = "fissures-4",
  Fissures_5 = "fissures-5",
  Hexis = "hexis",
  KuvaKuva = "kuva-kuva",
  KuvaKuvaflood = "kuva-kuvaflood",
  Loading = "loading",
  MenuAll = "menu-All",
  MenuAmp = "menu-Amp",
  MenuArcane = "menu-Arcane",
  MenuArchwing = "menu-Archwing",
  MenuArchwingColour = "menu-ArchwingColour",
  MenuArchwingEmblem = "menu-ArchwingEmblem",
  MenuArchwingPrimary = "menu-ArchwingPrimary",
  MenuArchwingSecondary = "menu-ArchwingSecondary",
  MenuArmor = "menu-Armor",
  MenuAugment = "menu-Augment",
  MenuAura = "menu-Aura",
  MenuAvionics = "menu-Avionics",
  MenuAvionicsDefensive = "menu-AvionicsDefensive",
  MenuAvionicsOffensive = "menu-AvionicsOffensive",
  MenuAvionicsSuper = "menu-AvionicsSuper",
  MenuAvionicsTactical = "menu-AvionicsTactical",
  MenuBarracks = "menu-Barracks",
  MenuBile = "menu-Bile",
  MenuBiotics = "menu-Biotics",
  MenuBlueprint = "menu-Blueprint",
  MenuBuild = "menu-Build",
  MenuCalx = "menu-Calx",
  MenuCapacity = "menu-Capacity",
  MenuCephalon = "menu-Cephalon",
  MenuCetusElder = "menu-CetusElder",
  MenuChangeSkins = "menu-ChangeSkins",
  MenuClanObstacleCourse = "menu-ClanObstacleCourse",
  MenuCommand = "menu-Command",
  MenuConnector = "menu-Connector",
  MenuCorpus = "menu-Corpus",
  MenuCraftingAmpBrace = "menu-CraftingAmpBrace",
  MenuCraftingAmpPrism = "menu-CraftingAmpPrism",
  MenuCraftingAmpScaffold = "menu-CraftingAmpScaffold",
  MenuCraftingHoundBody = "menu-CraftingHoundBody",
  MenuCraftingHoundHead = "menu-CraftingHoundHead",
  MenuCraftingHoundLegs = "menu-CraftingHoundLegs",
  MenuCraftingHoundTail = "menu-CraftingHoundTail",
  MenuCraftingKDriveBoard = "menu-CraftingKDriveBoard",
  MenuCraftingKDriveJet = "menu-CraftingKDriveJet",
  MenuCraftingKDriveNose = "menu-CraftingKDriveNose",
  MenuCraftingKDriveReactor = "menu-CraftingKDriveReactor",
  MenuCraftingKitgunChamber = "menu-CraftingKitgunChamber",
  MenuCraftingKitgunGrip = "menu-CraftingKitgunGrip",
  MenuCraftingKitgunLoader = "menu-CraftingKitgunLoader",
  MenuCraftingKitgunPrimaryGrip = "menu-CraftingKitgunPrimaryGrip",
  MenuCraftingMoaBrackets = "menu-CraftingMoaBrackets",
  MenuCraftingMoaCore = "menu-CraftingMoaCore",
  MenuCraftingMoaGyro = "menu-CraftingMoaGyro",
  MenuCraftingMoaModel = "menu-CraftingMoaModel",
  MenuDisplays = "menu-Displays",
  MenuDrone = "menu-Drone",
  MenuDuplicate = "menu-Duplicate",
  MenuEmotes = "menu-Emotes",
  MenuEnergy = "menu-Energy",
  MenuEngineering = "menu-Engineering",
  MenuEntrati = "menu-Entrati",
  MenuEquip = "menu-Equip",
  MenuExilus = "menu-Exilus",
  MenuFavorite = "menu-Favorite",
  MenuFishLarge = "menu-FishLarge",
  MenuFishMedium = "menu-FishMedium",
  MenuFishSmall = "menu-FishSmall",
  MenuFusion = "menu-Fusion",
  MenuFx = "menu-Fx",
  MenuGara = "menu-Gara",
  MenuGarden = "menu-Garden",
  MenuGear = "menu-Gear",
  MenuGearWheel = "menu-GearWheel",
  MenuGeneticImprint = "menu-GeneticImprint",
  MenuGhouls = "menu-Ghouls",
  MenuGift = "menu-Gift",
  MenuGlyph = "menu-Glyph",
  MenuGrineer = "menu-Grineer",
  MenuGrip = "menu-Grip",
  MenuGunnery = "menu-Gunnery",
  MenuHall = "menu-Hall",
  MenuIncomplete = "menu-Incomplete",
  MenuIndividualObstacleCourse = "menu-IndividualObstacleCourse",
  MenuInfested = "menu-Infested",
  MenuKavat = "menu-Kavat",
  MenuKeys = "menu-Keys",
  MenuKubrow = "menu-Kubrow",
  MenuKuvaLichActive = "menu-KuvaLichActive",
  MenuKuvaLichConverted = "menu-KuvaLichConverted",
  MenuKuvaLichTraded = "menu-KuvaLichTraded",
  MenuKuvaLichVanquished = "menu-KuvaLichVanquished",
  MenuLab = "menu-Lab",
  MenuLichCategory = "menu-LichCategory",
  MenuLimitedTime = "menu-LimitedTime",
  MenuLink = "menu-Link",
  MenuLotusEmblem = "menu-LotusEmblem",
  MenuManufacturerLavan = "menu-ManufacturerLavan",
  MenuManufacturerSigma = "menu-ManufacturerSigma",
  MenuManufacturerVidar = "menu-ManufacturerVidar",
  MenuManufacturerZekti = "menu-ManufacturerZekti",
  MenuMaterials = "menu-Materials",
  MenuMaterialsOff = "menu-MaterialsOff",
  MenuMech = "menu-Mech",
  MenuMechBoard = "menu-MechBoard",
  MenuMelee = "menu-Melee",
  MenuMisc = "menu-Misc",
  MenuMkI = "menu-MkI",
  MenuMkIi = "menu-MkII",
  MenuMkIii = "menu-MkIII",
  MenuMods = "menu-Mods",
  MenuModularItem = "menu-ModularItem",
  MenuNatural = "menu-Natural",
  MenuNoggles = "menu-Noggles",
  MenuOperator = "menu-Operator",
  MenuOrokinOn = "menu-OrokinOn",
  MenuOwnedBlueprint = "menu-OwnedBlueprint",
  MenuOxides = "menu-Oxides",
  MenuParazon = "menu-Parazon",
  MenuParazonLong = "menu-ParazonLong",
  MenuParazonLongShadow = "menu-ParazonLongShadow",
  MenuParazonLongShadow2 = "menu-ParazonLongShadow2",
  MenuPheromones = "menu-Pheromones",
  MenuPilot = "menu-Pilot",
  MenuPistol = "menu-Pistol",
  MenuPlayerShip = "menu-PlayerShip",
  MenuPrexCategory = "menu-PrexCategory",
  MenuPrimaryWeaponBow = "menu-PrimaryWeaponBow",
  MenuPrimaryWeaponLauncher = "menu-PrimaryWeaponLauncher",
  MenuPrimaryWeaponRifle = "menu-PrimaryWeaponRifle",
  MenuPrimaryWeaponShotgun = "menu-PrimaryWeaponShotgun",
  MenuPrimaryWeaponSniper = "menu-PrimaryWeaponSniper",
  MenuPrimaryWeaponSpeargun = "menu-PrimaryWeaponSpeargun",
  MenuPrimaryWeaponSpecial = "menu-PrimaryWeaponSpecial",
  MenuPrimeParts = "menu-PrimeParts",
  MenuProspector = "menu-Prospector",
  MenuPurchase = "menu-Purchase",
  MenuQuestPickerActive = "menu-QuestPickerActive",
  MenuQuestPickerCompleted = "menu-QuestPickerCompleted",
  MenuQuestPickerMystery = "menu-QuestPickerMystery",
  MenuRailjack = "menu-Railjack",
  MenuRailjack2 = "menu-Railjack2",
  MenuRailjackAbilities = "menu-RailjackAbilities",
  MenuRailjackCountermeasures = "menu-RailjackCountermeasures",
  MenuRailjackOrdnance = "menu-RailjackOrdnance",
  MenuRailjackPilot = "menu-RailjackPilot",
  MenuRailjackTurrets = "menu-RailjackTurrets",
  MenuRelatedItems = "menu-RelatedItems",
  MenuRelic = "menu-Relic",
  MenuRelicAxi = "menu-RelicAxi",
  MenuRelicLith = "menu-RelicLith",
  MenuRelicMeso = "menu-RelicMeso",
  MenuRelicNeo = "menu-RelicNeo",
  MenuRequiemMod = "menu-RequiemMod",
  MenuRequiemRelic = "menu-RequiemRelic",
  MenuRequirementsMet = "menu-RequirementsMet",
  MenuResearchCorpus = "menu-ResearchCorpus",
  MenuResearchGrineer = "menu-ResearchGrineer",
  MenuResearchInfested = "menu-ResearchInfested",
  MenuResearchOrokin = "menu-ResearchOrokin",
  MenuResearchRailjack = "menu-ResearchRailjack",
  MenuResearchTenno = "menu-ResearchTenno",
  MenuResourceDrone = "menu-ResourceDrone",
  MenuRifle = "menu-Rifle",
  MenuRifleOff = "menu-RifleOff",
  MenuRivenMod = "menu-RivenMod",
  MenuRoundVial = "menu-RoundVial",
  MenuSalvage = "menu-Salvage",
  MenuSentinel = "menu-Sentinel",
  MenuShotgun = "menu-Shotgun",
  MenuSigils = "menu-Sigils",
  MenuSimaris = "menu-Simaris",
  MenuSkins = "menu-Skins",
  MenuSolaris = "menu-Solaris",
  MenuSquareVial = "menu-SquareVial",
  MenuStance = "menu-Stance",
  MenuStrike = "menu-Strike",
  MenuSwatch = "menu-Swatch",
  MenuSynthetics = "menu-Synthetics",
  MenuSynthetics2 = "menu-Synthetics2",
  MenuTactical = "menu-Tactical",
  MenuTeleport = "menu-Teleport",
  MenuTenets = "menu-Tenets",
  MenuUtility = "menu-Utility",
  MenuUtility2 = "menu-Utility2",
  MenuVehiclesKdrive = "menu-VehiclesKdrive",
  MenuWarframe = "menu-Warframe",
  MenuWarframeOff = "menu-WarframeOff",
  MenuWeapons = "menu-Weapons",
  MenuWild = "menu-Wild",
  MenuWoundedInfestedCritter = "menu-WoundedInfestedCritter",
  MenuWoundedInfestedPredator = "menu-WoundedInfestedPredator",
  Nightmare = "nightmare",
  Nightwave = "nightwave",
  Ostron = "ostron",
  SigilsArbitersOfHexisArbitersLevel1 = "sigils-Arbiters-of-Hexis-ArbitersLevel1",
  SigilsArbitersOfHexisArbitersLevel2 = "sigils-Arbiters-of-Hexis-ArbitersLevel2",
  SigilsArbitersOfHexisArbitersLevel3 = "sigils-Arbiters-of-Hexis-ArbitersLevel3",
  SigilsArbitersOfHexisArbitersLevel4 = "sigils-Arbiters-of-Hexis-ArbitersLevel4",
  SigilsArbitersOfHexisArbitersLevel5 = "sigils-Arbiters-of-Hexis-ArbitersLevel5",
  SigilsCephalonSudaCephalonSudaLevel1 = "sigils-Cephalon-Suda-CephalonSudaLevel1",
  SigilsCephalonSudaCephalonSudaLevel2 = "sigils-Cephalon-Suda-CephalonSudaLevel2",
  SigilsCephalonSudaCephalonSudaLevel3 = "sigils-Cephalon-Suda-CephalonSudaLevel3",
  SigilsCephalonSudaCephalonSudaLevel4 = "sigils-Cephalon-Suda-CephalonSudaLevel4",
  SigilsCephalonSudaCephalonSudaLevel5 = "sigils-Cephalon-Suda-CephalonSudaLevel5",
  SigilsEntratiEntratiLevel1 = "sigils-Entrati-EntratiLevel1",
  SigilsEntratiEntratiLevel2 = "sigils-Entrati-EntratiLevel2",
  SigilsEntratiEntratiLevel3 = "sigils-Entrati-EntratiLevel3",
  SigilsEntratiEntratiLevel4 = "sigils-Entrati-EntratiLevel4",
  SigilsEntratiEntratiLevel5 = "sigils-Entrati-EntratiLevel5",
  SigilsNecraloidNecraloidLevel1 = "sigils-Necraloid-NecraloidLevel1",
  SigilsNecraloidNecraloidLevel2 = "sigils-Necraloid-NecraloidLevel2",
  SigilsNecraloidNecraloidLevel3 = "sigils-Necraloid-NecraloidLevel3",
  SigilsNegativeRank1 = "sigils-NegativeRank1",
  SigilsNegativeRank2 = "sigils-NegativeRank2",
  SigilsNeutral = "sigils-Neutral",
  SigilsNewLokaNewLokaLevel1 = "sigils-New-Loka-NewLokaLevel1",
  SigilsNewLokaNewLokaLevel2 = "sigils-New-Loka-NewLokaLevel2",
  SigilsNewLokaNewLokaLevel3 = "sigils-New-Loka-NewLokaLevel3",
  SigilsNewLokaNewLokaLevel4 = "sigils-New-Loka-NewLokaLevel4",
  SigilsNewLokaNewLokaLevel5 = "sigils-New-Loka-NewLokaLevel5",
  SigilsOstronOstronLevel1 = "sigils-Ostron-OstronLevel1",
  SigilsOstronOstronLevel2 = "sigils-Ostron-OstronLevel2",
  SigilsOstronOstronLevel3 = "sigils-Ostron-OstronLevel3",
  SigilsOstronOstronLevel4 = "sigils-Ostron-OstronLevel4",
  SigilsOstronOstronLevel5 = "sigils-Ostron-OstronLevel5",
  SigilsRedVeilRedVeilLevel1 = "sigils-Red-Veil-RedVeilLevel1",
  SigilsRedVeilRedVeilLevel2 = "sigils-Red-Veil-RedVeilLevel2",
  SigilsRedVeilRedVeilLevel3 = "sigils-Red-Veil-RedVeilLevel3",
  SigilsRedVeilRedVeilLevel4 = "sigils-Red-Veil-RedVeilLevel4",
  SigilsRedVeilRedVeilLevel5 = "sigils-Red-Veil-RedVeilLevel5",
  SigilsSolarisUnitedSolarisLevel1 = "sigils-Solaris-United-SolarisLevel1",
  SigilsSolarisUnitedSolarisLevel2 = "sigils-Solaris-United-SolarisLevel2",
  SigilsSolarisUnitedSolarisLevel3 = "sigils-Solaris-United-SolarisLevel3",
  SigilsSolarisUnitedSolarisLevel4 = "sigils-Solaris-United-SolarisLevel4",
  SigilsSolarisUnitedSolarisLevel5 = "sigils-Solaris-United-SolarisLevel5",
  SigilsSteelMeridianSteelMeridianLevel1 = "sigils-Steel-Meridian-SteelMeridianLevel1",
  SigilsSteelMeridianSteelMeridianLevel2 = "sigils-Steel-Meridian-SteelMeridianLevel2",
  SigilsSteelMeridianSteelMeridianLevel3 = "sigils-Steel-Meridian-SteelMeridianLevel3",
  SigilsSteelMeridianSteelMeridianLevel4 = "sigils-Steel-Meridian-SteelMeridianLevel4",
  SigilsSteelMeridianSteelMeridianLevel5 = "sigils-Steel-Meridian-SteelMeridianLevel5",
  SigilsTheHoldfastsHoldfastsLevel1 = "sigils-The-Holdfasts-HoldfastsLevel1",
  SigilsTheHoldfastsHoldfastsLevel2 = "sigils-The-Holdfasts-HoldfastsLevel2",
  SigilsTheHoldfastsHoldfastsLevel3 = "sigils-The-Holdfasts-HoldfastsLevel3",
  SigilsTheHoldfastsHoldfastsLevel4 = "sigils-The-Holdfasts-HoldfastsLevel4",
  SigilsTheHoldfastsHoldfastsLevel5 = "sigils-The-Holdfasts-HoldfastsLevel5",
  SigilsThePerrinSequencePerrinLevel1 = "sigils-The-Perrin-Sequence-PerrinLevel1",
  SigilsThePerrinSequencePerrinLevel2 = "sigils-The-Perrin-Sequence-PerrinLevel2",
  SigilsThePerrinSequencePerrinLevel3 = "sigils-The-Perrin-Sequence-PerrinLevel3",
  SigilsThePerrinSequencePerrinLevel4 = "sigils-The-Perrin-Sequence-PerrinLevel4",
  SigilsThePerrinSequencePerrinLevel5 = "sigils-The-Perrin-Sequence-PerrinLevel5",
  SigilsTheQuillsQuillsLevel1 = "sigils-The-Quills-QuillsLevel1",
  SigilsTheQuillsQuillsLevel2 = "sigils-The-Quills-QuillsLevel2",
  SigilsTheQuillsQuillsLevel3 = "sigils-The-Quills-QuillsLevel3",
  SigilsTheQuillsQuillsLevel4 = "sigils-The-Quills-QuillsLevel4",
  SigilsTheQuillsQuillsLevel5 = "sigils-The-Quills-QuillsLevel5",
  SigilsVentKidsVentKidsLevel1 = "sigils-VentKids-VentKidsLevel1",
  SigilsVentKidsVentKidsLevel2 = "sigils-VentKids-VentKidsLevel2",
  SigilsVentKidsVentKidsLevel3 = "sigils-VentKids-VentKidsLevel3",
  SigilsVentKidsVentKidsLevel4 = "sigils-VentKids-VentKidsLevel4",
  SigilsVentKidsVentKidsLevel5 = "sigils-VentKids-VentKidsLevel5",
  SigilsVoxSolarisVoxLevel1 = "sigils-Vox-Solaris-VoxLevel1",
  SigilsVoxSolarisVoxLevel2 = "sigils-Vox-Solaris-VoxLevel2",
  SigilsVoxSolarisVoxLevel3 = "sigils-Vox-Solaris-VoxLevel3",
  SigilsVoxSolarisVoxLevel4 = "sigils-Vox-Solaris-VoxLevel4",
  SigilsVoxSolarisVoxLevel5 = "sigils-Vox-Solaris-VoxLevel5",
  Simaris = "simaris",
  Solaris = "solaris",
  SpLogo = "sp-logo",
  Standing = "standing",
  Wfcd = "wfcd",
}

export const WARFRAME_SYMBOLS_CODEPOINTS: { [key in WarframeSymbols]: string } = {
  [WarframeSymbols.Arbitrations]: "61697",
  [WarframeSymbols.Archwing]: "61698",
  [WarframeSymbols.Entrati]: "61699",
  [WarframeSymbols.FactionsCorpus]: "61700",
  [WarframeSymbols.FactionsCorrupted]: "61701",
  [WarframeSymbols.FactionsGrineer]: "61702",
  [WarframeSymbols.FactionsInfested]: "61703",
  [WarframeSymbols.FactionsNarmer]: "61704",
  [WarframeSymbols.FactionsNarmer2]: "61705",
  [WarframeSymbols.FactionsSentient]: "61706",
  [WarframeSymbols.Fissures_1]: "61707",
  [WarframeSymbols.Fissures_2]: "61708",
  [WarframeSymbols.Fissures_3]: "61709",
  [WarframeSymbols.Fissures_4]: "61710",
  [WarframeSymbols.Fissures_5]: "61711",
  [WarframeSymbols.Hexis]: "61712",
  [WarframeSymbols.KuvaKuva]: "61713",
  [WarframeSymbols.KuvaKuvaflood]: "61714",
  [WarframeSymbols.Loading]: "61715",
  [WarframeSymbols.MenuAll]: "61716",
  [WarframeSymbols.MenuAmp]: "61717",
  [WarframeSymbols.MenuArcane]: "61718",
  [WarframeSymbols.MenuArchwing]: "61719",
  [WarframeSymbols.MenuArchwingColour]: "61720",
  [WarframeSymbols.MenuArchwingEmblem]: "61721",
  [WarframeSymbols.MenuArchwingPrimary]: "61722",
  [WarframeSymbols.MenuArchwingSecondary]: "61723",
  [WarframeSymbols.MenuArmor]: "61724",
  [WarframeSymbols.MenuAugment]: "61725",
  [WarframeSymbols.MenuAura]: "61726",
  [WarframeSymbols.MenuAvionics]: "61727",
  [WarframeSymbols.MenuAvionicsDefensive]: "61728",
  [WarframeSymbols.MenuAvionicsOffensive]: "61729",
  [WarframeSymbols.MenuAvionicsSuper]: "61730",
  [WarframeSymbols.MenuAvionicsTactical]: "61731",
  [WarframeSymbols.MenuBarracks]: "61732",
  [WarframeSymbols.MenuBile]: "61733",
  [WarframeSymbols.MenuBiotics]: "61734",
  [WarframeSymbols.MenuBlueprint]: "61735",
  [WarframeSymbols.MenuBuild]: "61736",
  [WarframeSymbols.MenuCalx]: "61737",
  [WarframeSymbols.MenuCapacity]: "61738",
  [WarframeSymbols.MenuCephalon]: "61739",
  [WarframeSymbols.MenuCetusElder]: "61740",
  [WarframeSymbols.MenuChangeSkins]: "61741",
  [WarframeSymbols.MenuClanObstacleCourse]: "61742",
  [WarframeSymbols.MenuCommand]: "61743",
  [WarframeSymbols.MenuConnector]: "61744",
  [WarframeSymbols.MenuCorpus]: "61745",
  [WarframeSymbols.MenuCraftingAmpBrace]: "61746",
  [WarframeSymbols.MenuCraftingAmpPrism]: "61747",
  [WarframeSymbols.MenuCraftingAmpScaffold]: "61748",
  [WarframeSymbols.MenuCraftingHoundBody]: "61749",
  [WarframeSymbols.MenuCraftingHoundHead]: "61750",
  [WarframeSymbols.MenuCraftingHoundLegs]: "61751",
  [WarframeSymbols.MenuCraftingHoundTail]: "61752",
  [WarframeSymbols.MenuCraftingKDriveBoard]: "61753",
  [WarframeSymbols.MenuCraftingKDriveJet]: "61754",
  [WarframeSymbols.MenuCraftingKDriveNose]: "61755",
  [WarframeSymbols.MenuCraftingKDriveReactor]: "61756",
  [WarframeSymbols.MenuCraftingKitgunChamber]: "61757",
  [WarframeSymbols.MenuCraftingKitgunGrip]: "61758",
  [WarframeSymbols.MenuCraftingKitgunLoader]: "61759",
  [WarframeSymbols.MenuCraftingKitgunPrimaryGrip]: "61760",
  [WarframeSymbols.MenuCraftingMoaBrackets]: "61761",
  [WarframeSymbols.MenuCraftingMoaCore]: "61762",
  [WarframeSymbols.MenuCraftingMoaGyro]: "61763",
  [WarframeSymbols.MenuCraftingMoaModel]: "61764",
  [WarframeSymbols.MenuDisplays]: "61765",
  [WarframeSymbols.MenuDrone]: "61766",
  [WarframeSymbols.MenuDuplicate]: "61767",
  [WarframeSymbols.MenuEmotes]: "61768",
  [WarframeSymbols.MenuEnergy]: "61769",
  [WarframeSymbols.MenuEngineering]: "61770",
  [WarframeSymbols.MenuEntrati]: "61771",
  [WarframeSymbols.MenuEquip]: "61772",
  [WarframeSymbols.MenuExilus]: "61773",
  [WarframeSymbols.MenuFavorite]: "61774",
  [WarframeSymbols.MenuFishLarge]: "61775",
  [WarframeSymbols.MenuFishMedium]: "61776",
  [WarframeSymbols.MenuFishSmall]: "61777",
  [WarframeSymbols.MenuFusion]: "61778",
  [WarframeSymbols.MenuFx]: "61779",
  [WarframeSymbols.MenuGara]: "61780",
  [WarframeSymbols.MenuGarden]: "61781",
  [WarframeSymbols.MenuGear]: "61782",
  [WarframeSymbols.MenuGearWheel]: "61783",
  [WarframeSymbols.MenuGeneticImprint]: "61784",
  [WarframeSymbols.MenuGhouls]: "61785",
  [WarframeSymbols.MenuGift]: "61786",
  [WarframeSymbols.MenuGlyph]: "61787",
  [WarframeSymbols.MenuGrineer]: "61788",
  [WarframeSymbols.MenuGrip]: "61789",
  [WarframeSymbols.MenuGunnery]: "61790",
  [WarframeSymbols.MenuHall]: "61791",
  [WarframeSymbols.MenuIncomplete]: "61792",
  [WarframeSymbols.MenuIndividualObstacleCourse]: "61793",
  [WarframeSymbols.MenuInfested]: "61794",
  [WarframeSymbols.MenuKavat]: "61795",
  [WarframeSymbols.MenuKeys]: "61796",
  [WarframeSymbols.MenuKubrow]: "61797",
  [WarframeSymbols.MenuKuvaLichActive]: "61798",
  [WarframeSymbols.MenuKuvaLichConverted]: "61799",
  [WarframeSymbols.MenuKuvaLichTraded]: "61800",
  [WarframeSymbols.MenuKuvaLichVanquished]: "61801",
  [WarframeSymbols.MenuLab]: "61802",
  [WarframeSymbols.MenuLichCategory]: "61803",
  [WarframeSymbols.MenuLimitedTime]: "61804",
  [WarframeSymbols.MenuLink]: "61805",
  [WarframeSymbols.MenuLotusEmblem]: "61806",
  [WarframeSymbols.MenuManufacturerLavan]: "61807",
  [WarframeSymbols.MenuManufacturerSigma]: "61808",
  [WarframeSymbols.MenuManufacturerVidar]: "61809",
  [WarframeSymbols.MenuManufacturerZekti]: "61810",
  [WarframeSymbols.MenuMaterials]: "61811",
  [WarframeSymbols.MenuMaterialsOff]: "61812",
  [WarframeSymbols.MenuMech]: "61813",
  [WarframeSymbols.MenuMechBoard]: "61814",
  [WarframeSymbols.MenuMelee]: "61815",
  [WarframeSymbols.MenuMisc]: "61816",
  [WarframeSymbols.MenuMkI]: "61817",
  [WarframeSymbols.MenuMkIi]: "61818",
  [WarframeSymbols.MenuMkIii]: "61819",
  [WarframeSymbols.MenuMods]: "61820",
  [WarframeSymbols.MenuModularItem]: "61821",
  [WarframeSymbols.MenuNatural]: "61822",
  [WarframeSymbols.MenuNoggles]: "61823",
  [WarframeSymbols.MenuOperator]: "61824",
  [WarframeSymbols.MenuOrokinOn]: "61825",
  [WarframeSymbols.MenuOwnedBlueprint]: "61826",
  [WarframeSymbols.MenuOxides]: "61827",
  [WarframeSymbols.MenuParazon]: "61828",
  [WarframeSymbols.MenuParazonLong]: "61829",
  [WarframeSymbols.MenuParazonLongShadow]: "61830",
  [WarframeSymbols.MenuParazonLongShadow2]: "61831",
  [WarframeSymbols.MenuPheromones]: "61832",
  [WarframeSymbols.MenuPilot]: "61833",
  [WarframeSymbols.MenuPistol]: "61834",
  [WarframeSymbols.MenuPlayerShip]: "61835",
  [WarframeSymbols.MenuPrexCategory]: "61836",
  [WarframeSymbols.MenuPrimaryWeaponBow]: "61837",
  [WarframeSymbols.MenuPrimaryWeaponLauncher]: "61838",
  [WarframeSymbols.MenuPrimaryWeaponRifle]: "61839",
  [WarframeSymbols.MenuPrimaryWeaponShotgun]: "61840",
  [WarframeSymbols.MenuPrimaryWeaponSniper]: "61841",
  [WarframeSymbols.MenuPrimaryWeaponSpeargun]: "61842",
  [WarframeSymbols.MenuPrimaryWeaponSpecial]: "61843",
  [WarframeSymbols.MenuPrimeParts]: "61844",
  [WarframeSymbols.MenuProspector]: "61845",
  [WarframeSymbols.MenuPurchase]: "61846",
  [WarframeSymbols.MenuQuestPickerActive]: "61847",
  [WarframeSymbols.MenuQuestPickerCompleted]: "61848",
  [WarframeSymbols.MenuQuestPickerMystery]: "61849",
  [WarframeSymbols.MenuRailjack]: "61850",
  [WarframeSymbols.MenuRailjack2]: "61851",
  [WarframeSymbols.MenuRailjackAbilities]: "61852",
  [WarframeSymbols.MenuRailjackCountermeasures]: "61853",
  [WarframeSymbols.MenuRailjackOrdnance]: "61854",
  [WarframeSymbols.MenuRailjackPilot]: "61855",
  [WarframeSymbols.MenuRailjackTurrets]: "61856",
  [WarframeSymbols.MenuRelatedItems]: "61857",
  [WarframeSymbols.MenuRelic]: "61858",
  [WarframeSymbols.MenuRelicAxi]: "61859",
  [WarframeSymbols.MenuRelicLith]: "61860",
  [WarframeSymbols.MenuRelicMeso]: "61861",
  [WarframeSymbols.MenuRelicNeo]: "61862",
  [WarframeSymbols.MenuRequiemMod]: "61863",
  [WarframeSymbols.MenuRequiemRelic]: "61864",
  [WarframeSymbols.MenuRequirementsMet]: "61865",
  [WarframeSymbols.MenuResearchCorpus]: "61866",
  [WarframeSymbols.MenuResearchGrineer]: "61867",
  [WarframeSymbols.MenuResearchInfested]: "61868",
  [WarframeSymbols.MenuResearchOrokin]: "61869",
  [WarframeSymbols.MenuResearchRailjack]: "61870",
  [WarframeSymbols.MenuResearchTenno]: "61871",
  [WarframeSymbols.MenuResourceDrone]: "61872",
  [WarframeSymbols.MenuRifle]: "61873",
  [WarframeSymbols.MenuRifleOff]: "61874",
  [WarframeSymbols.MenuRivenMod]: "61875",
  [WarframeSymbols.MenuRoundVial]: "61876",
  [WarframeSymbols.MenuSalvage]: "61877",
  [WarframeSymbols.MenuSentinel]: "61878",
  [WarframeSymbols.MenuShotgun]: "61879",
  [WarframeSymbols.MenuSigils]: "61880",
  [WarframeSymbols.MenuSimaris]: "61881",
  [WarframeSymbols.MenuSkins]: "61882",
  [WarframeSymbols.MenuSolaris]: "61883",
  [WarframeSymbols.MenuSquareVial]: "61884",
  [WarframeSymbols.MenuStance]: "61885",
  [WarframeSymbols.MenuStrike]: "61886",
  [WarframeSymbols.MenuSwatch]: "61887",
  [WarframeSymbols.MenuSynthetics]: "61888",
  [WarframeSymbols.MenuSynthetics2]: "61889",
  [WarframeSymbols.MenuTactical]: "61890",
  [WarframeSymbols.MenuTeleport]: "61891",
  [WarframeSymbols.MenuTenets]: "61892",
  [WarframeSymbols.MenuUtility]: "61893",
  [WarframeSymbols.MenuUtility2]: "61894",
  [WarframeSymbols.MenuVehiclesKdrive]: "61895",
  [WarframeSymbols.MenuWarframe]: "61896",
  [WarframeSymbols.MenuWarframeOff]: "61897",
  [WarframeSymbols.MenuWeapons]: "61898",
  [WarframeSymbols.MenuWild]: "61899",
  [WarframeSymbols.MenuWoundedInfestedCritter]: "61900",
  [WarframeSymbols.MenuWoundedInfestedPredator]: "61901",
  [WarframeSymbols.Nightmare]: "61902",
  [WarframeSymbols.Nightwave]: "61903",
  [WarframeSymbols.Ostron]: "61904",
  [WarframeSymbols.SigilsArbitersOfHexisArbitersLevel1]: "61905",
  [WarframeSymbols.SigilsArbitersOfHexisArbitersLevel2]: "61906",
  [WarframeSymbols.SigilsArbitersOfHexisArbitersLevel3]: "61907",
  [WarframeSymbols.SigilsArbitersOfHexisArbitersLevel4]: "61908",
  [WarframeSymbols.SigilsArbitersOfHexisArbitersLevel5]: "61909",
  [WarframeSymbols.SigilsCephalonSudaCephalonSudaLevel1]: "61910",
  [WarframeSymbols.SigilsCephalonSudaCephalonSudaLevel2]: "61911",
  [WarframeSymbols.SigilsCephalonSudaCephalonSudaLevel3]: "61912",
  [WarframeSymbols.SigilsCephalonSudaCephalonSudaLevel4]: "61913",
  [WarframeSymbols.SigilsCephalonSudaCephalonSudaLevel5]: "61914",
  [WarframeSymbols.SigilsEntratiEntratiLevel1]: "61915",
  [WarframeSymbols.SigilsEntratiEntratiLevel2]: "61916",
  [WarframeSymbols.SigilsEntratiEntratiLevel3]: "61917",
  [WarframeSymbols.SigilsEntratiEntratiLevel4]: "61918",
  [WarframeSymbols.SigilsEntratiEntratiLevel5]: "61919",
  [WarframeSymbols.SigilsNecraloidNecraloidLevel1]: "61920",
  [WarframeSymbols.SigilsNecraloidNecraloidLevel2]: "61921",
  [WarframeSymbols.SigilsNecraloidNecraloidLevel3]: "61922",
  [WarframeSymbols.SigilsNegativeRank1]: "61923",
  [WarframeSymbols.SigilsNegativeRank2]: "61924",
  [WarframeSymbols.SigilsNeutral]: "61925",
  [WarframeSymbols.SigilsNewLokaNewLokaLevel1]: "61926",
  [WarframeSymbols.SigilsNewLokaNewLokaLevel2]: "61927",
  [WarframeSymbols.SigilsNewLokaNewLokaLevel3]: "61928",
  [WarframeSymbols.SigilsNewLokaNewLokaLevel4]: "61929",
  [WarframeSymbols.SigilsNewLokaNewLokaLevel5]: "61930",
  [WarframeSymbols.SigilsOstronOstronLevel1]: "61931",
  [WarframeSymbols.SigilsOstronOstronLevel2]: "61932",
  [WarframeSymbols.SigilsOstronOstronLevel3]: "61933",
  [WarframeSymbols.SigilsOstronOstronLevel4]: "61934",
  [WarframeSymbols.SigilsOstronOstronLevel5]: "61935",
  [WarframeSymbols.SigilsRedVeilRedVeilLevel1]: "61936",
  [WarframeSymbols.SigilsRedVeilRedVeilLevel2]: "61937",
  [WarframeSymbols.SigilsRedVeilRedVeilLevel3]: "61938",
  [WarframeSymbols.SigilsRedVeilRedVeilLevel4]: "61939",
  [WarframeSymbols.SigilsRedVeilRedVeilLevel5]: "61940",
  [WarframeSymbols.SigilsSolarisUnitedSolarisLevel1]: "61941",
  [WarframeSymbols.SigilsSolarisUnitedSolarisLevel2]: "61942",
  [WarframeSymbols.SigilsSolarisUnitedSolarisLevel3]: "61943",
  [WarframeSymbols.SigilsSolarisUnitedSolarisLevel4]: "61944",
  [WarframeSymbols.SigilsSolarisUnitedSolarisLevel5]: "61945",
  [WarframeSymbols.SigilsSteelMeridianSteelMeridianLevel1]: "61946",
  [WarframeSymbols.SigilsSteelMeridianSteelMeridianLevel2]: "61947",
  [WarframeSymbols.SigilsSteelMeridianSteelMeridianLevel3]: "61948",
  [WarframeSymbols.SigilsSteelMeridianSteelMeridianLevel4]: "61949",
  [WarframeSymbols.SigilsSteelMeridianSteelMeridianLevel5]: "61950",
  [WarframeSymbols.SigilsTheHoldfastsHoldfastsLevel1]: "61951",
  [WarframeSymbols.SigilsTheHoldfastsHoldfastsLevel2]: "61952",
  [WarframeSymbols.SigilsTheHoldfastsHoldfastsLevel3]: "61953",
  [WarframeSymbols.SigilsTheHoldfastsHoldfastsLevel4]: "61954",
  [WarframeSymbols.SigilsTheHoldfastsHoldfastsLevel5]: "61955",
  [WarframeSymbols.SigilsThePerrinSequencePerrinLevel1]: "61956",
  [WarframeSymbols.SigilsThePerrinSequencePerrinLevel2]: "61957",
  [WarframeSymbols.SigilsThePerrinSequencePerrinLevel3]: "61958",
  [WarframeSymbols.SigilsThePerrinSequencePerrinLevel4]: "61959",
  [WarframeSymbols.SigilsThePerrinSequencePerrinLevel5]: "61960",
  [WarframeSymbols.SigilsTheQuillsQuillsLevel1]: "61961",
  [WarframeSymbols.SigilsTheQuillsQuillsLevel2]: "61962",
  [WarframeSymbols.SigilsTheQuillsQuillsLevel3]: "61963",
  [WarframeSymbols.SigilsTheQuillsQuillsLevel4]: "61964",
  [WarframeSymbols.SigilsTheQuillsQuillsLevel5]: "61965",
  [WarframeSymbols.SigilsVentKidsVentKidsLevel1]: "61966",
  [WarframeSymbols.SigilsVentKidsVentKidsLevel2]: "61967",
  [WarframeSymbols.SigilsVentKidsVentKidsLevel3]: "61968",
  [WarframeSymbols.SigilsVentKidsVentKidsLevel4]: "61969",
  [WarframeSymbols.SigilsVentKidsVentKidsLevel5]: "61970",
  [WarframeSymbols.SigilsVoxSolarisVoxLevel1]: "61971",
  [WarframeSymbols.SigilsVoxSolarisVoxLevel2]: "61972",
  [WarframeSymbols.SigilsVoxSolarisVoxLevel3]: "61973",
  [WarframeSymbols.SigilsVoxSolarisVoxLevel4]: "61974",
  [WarframeSymbols.SigilsVoxSolarisVoxLevel5]: "61975",
  [WarframeSymbols.Simaris]: "61976",
  [WarframeSymbols.Solaris]: "61977",
  [WarframeSymbols.SpLogo]: "61978",
  [WarframeSymbols.Standing]: "61979",
  [WarframeSymbols.Wfcd]: "61980",
};
