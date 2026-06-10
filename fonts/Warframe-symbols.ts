export type WarframeSymbolsId =
  | "wfcd"
  | "the_hex"
  | "standing"
  | "sp-logo"
  | "solaris"
  | "simaris"
  | "ostron"
  | "normal-logo"
  | "nightwave"
  | "nightmare"
  | "loading"
  | "hexis"
  | "entrati"
  | "crossplay-logo"
  | "archwing"
  | "arbitrations"
  | "sigils-Neutral"
  | "sigils-NegativeRank2"
  | "sigils-NegativeRank1"
  | "requiem-Xata"
  | "requiem-Vome"
  | "requiem-Ris"
  | "requiem-Oull"
  | "requiem-Netra"
  | "requiem-Lohk"
  | "requiem-Khra"
  | "requiem-Jahu"
  | "requiem-Fass"
  | "nightwaves-weekly"
  | "nightwaves-elite"
  | "nightwaves-daily"
  | "menu-WoundedInfestedPredator"
  | "menu-WoundedInfestedCritter"
  | "menu-Wild"
  | "menu-Weapons"
  | "menu-WarframeOff"
  | "menu-Warframe"
  | "menu-VehiclesKdrive"
  | "menu-Utility2"
  | "menu-Utility"
  | "menu-Tenets"
  | "menu-Teleport"
  | "menu-Tactical"
  | "menu-Synthetics2"
  | "menu-Synthetics"
  | "menu-Swatch"
  | "menu-Strike"
  | "menu-Stance"
  | "menu-SquareVial"
  | "menu-Solaris"
  | "menu-Skins"
  | "menu-Simaris"
  | "menu-Sigils"
  | "menu-Shotgun"
  | "menu-Sentinel"
  | "menu-Salvage"
  | "menu-RoundVial"
  | "menu-RivenMod"
  | "menu-RifleOff"
  | "menu-Rifle"
  | "menu-ResourceDrone"
  | "menu-ResearchTenno"
  | "menu-ResearchRailjack"
  | "menu-ResearchOrokin"
  | "menu-ResearchInfested"
  | "menu-ResearchGrineer"
  | "menu-ResearchCorpus"
  | "menu-RequirementsMet"
  | "menu-RequiemRelic"
  | "menu-RequiemMod"
  | "menu-RelicNeo"
  | "menu-RelicMeso"
  | "menu-RelicLith"
  | "menu-RelicAxi"
  | "menu-Relic"
  | "menu-RelatedItems"
  | "menu-RailjackTurrets"
  | "menu-RailjackPilot"
  | "menu-RailjackOrdnance"
  | "menu-RailjackCountermeasures"
  | "menu-RailjackAbilities"
  | "menu-Railjack2"
  | "menu-Railjack"
  | "menu-QuestPickerMystery"
  | "menu-QuestPickerCompleted"
  | "menu-QuestPickerActive"
  | "menu-Purchase"
  | "menu-Prospector"
  | "menu-PrimeParts"
  | "menu-PrimaryWeaponSpecial"
  | "menu-PrimaryWeaponSpeargun"
  | "menu-PrimaryWeaponSniper"
  | "menu-PrimaryWeaponShotgun"
  | "menu-PrimaryWeaponRifle"
  | "menu-PrimaryWeaponLauncher"
  | "menu-PrimaryWeaponBow"
  | "menu-PrexCategory"
  | "menu-PlayerShip"
  | "menu-Pistol"
  | "menu-Pilot"
  | "menu-Pheromones"
  | "menu-ParazonLongShadow2"
  | "menu-ParazonLongShadow"
  | "menu-ParazonLong"
  | "menu-Parazon"
  | "menu-Oxides"
  | "menu-OwnedBlueprint"
  | "menu-OrokinOn"
  | "menu-Operator"
  | "menu-Noggles"
  | "menu-Natural"
  | "menu-ModularItem"
  | "menu-Mods"
  | "menu-MkIII"
  | "menu-MkII"
  | "menu-MkI"
  | "menu-Misc"
  | "menu-Melee"
  | "menu-MechBoard"
  | "menu-Mech"
  | "menu-MaterialsOff"
  | "menu-Materials"
  | "menu-ManufacturerZekti"
  | "menu-ManufacturerVidar"
  | "menu-ManufacturerSigma"
  | "menu-ManufacturerLavan"
  | "menu-LotusEmblem"
  | "menu-Link"
  | "menu-LimitedTime"
  | "menu-LichCategory"
  | "menu-Lab"
  | "menu-KuvaLichVanquished"
  | "menu-KuvaLichTraded"
  | "menu-KuvaLichConverted"
  | "menu-KuvaLichActive"
  | "menu-Kubrow"
  | "menu-Keys"
  | "menu-Kavat"
  | "menu-Infested"
  | "menu-IndividualObstacleCourse"
  | "menu-Incomplete"
  | "menu-Hall"
  | "menu-Gunnery"
  | "menu-Grip"
  | "menu-Grineer"
  | "menu-Glyph"
  | "menu-Gift"
  | "menu-Ghouls"
  | "menu-GeneticImprint"
  | "menu-GearWheel"
  | "menu-Gear"
  | "menu-Garden"
  | "menu-Gara"
  | "menu-Fx"
  | "menu-Fusion"
  | "menu-FishSmall"
  | "menu-FishMedium"
  | "menu-FishLarge"
  | "menu-Favorite"
  | "menu-Exilus"
  | "menu-Equip"
  | "menu-Entrati"
  | "menu-Engineering"
  | "menu-Energy"
  | "menu-Emotes"
  | "menu-Duplicate"
  | "menu-Drone"
  | "menu-Displays"
  | "menu-CraftingMoaModel"
  | "menu-CraftingMoaGyro"
  | "menu-CraftingMoaCore"
  | "menu-CraftingMoaBrackets"
  | "menu-CraftingKitgunPrimaryGrip"
  | "menu-CraftingKitgunLoader"
  | "menu-CraftingKitgunGrip"
  | "menu-CraftingKitgunChamber"
  | "menu-CraftingKDriveReactor"
  | "menu-CraftingKDriveNose"
  | "menu-CraftingKDriveJet"
  | "menu-CraftingKDriveBoard"
  | "menu-CraftingHoundTail"
  | "menu-CraftingHoundLegs"
  | "menu-CraftingHoundHead"
  | "menu-CraftingHoundBody"
  | "menu-CraftingAmpScaffold"
  | "menu-CraftingAmpPrism"
  | "menu-CraftingAmpBrace"
  | "menu-Corpus"
  | "menu-Connector"
  | "menu-Command"
  | "menu-ClanObstacleCourse"
  | "menu-ChangeSkins"
  | "menu-CetusElder"
  | "menu-Cephalon"
  | "menu-Capacity"
  | "menu-Calx"
  | "menu-Build"
  | "menu-Blueprint"
  | "menu-Biotics"
  | "menu-Bile"
  | "menu-Barracks"
  | "menu-AvionicsTactical"
  | "menu-AvionicsSuper"
  | "menu-AvionicsOffensive"
  | "menu-AvionicsDefensive"
  | "menu-Avionics"
  | "menu-Aura"
  | "menu-Augment"
  | "menu-Armor"
  | "menu-ArchwingSecondary"
  | "menu-ArchwingPrimary"
  | "menu-ArchwingEmblem"
  | "menu-ArchwingColour"
  | "menu-Archwing"
  | "menu-Arcane"
  | "menu-Amp"
  | "menu-All"
  | "kuva-kuvaflood"
  | "kuva-kuva"
  | "fissures-requiem"
  | "fissures-neo"
  | "fissures-meso"
  | "fissures-lith"
  | "fissures-axi"
  | "fissures-5"
  | "fissures-4"
  | "fissures-3"
  | "fissures-2"
  | "fissures-1"
  | "factions-sentient"
  | "factions-narmer2"
  | "factions-narmer"
  | "factions-murmur"
  | "factions-infested"
  | "factions-grineer"
  | "factions-corrupted"
  | "factions-corpus"
  | "sigils-Vox-Solaris-VoxLevel5"
  | "sigils-Vox-Solaris-VoxLevel4"
  | "sigils-Vox-Solaris-VoxLevel3"
  | "sigils-Vox-Solaris-VoxLevel2"
  | "sigils-Vox-Solaris-VoxLevel1"
  | "sigils-VentKids-VentKidsLevel5"
  | "sigils-VentKids-VentKidsLevel4"
  | "sigils-VentKids-VentKidsLevel3"
  | "sigils-VentKids-VentKidsLevel2"
  | "sigils-VentKids-VentKidsLevel1"
  | "sigils-The-Quills-QuillsLevel5"
  | "sigils-The-Quills-QuillsLevel4"
  | "sigils-The-Quills-QuillsLevel3"
  | "sigils-The-Quills-QuillsLevel2"
  | "sigils-The-Quills-QuillsLevel1"
  | "sigils-The-Perrin-Sequence-PerrinLevel5"
  | "sigils-The-Perrin-Sequence-PerrinLevel4"
  | "sigils-The-Perrin-Sequence-PerrinLevel3"
  | "sigils-The-Perrin-Sequence-PerrinLevel2"
  | "sigils-The-Perrin-Sequence-PerrinLevel1"
  | "sigils-The-Holdfasts-HoldfastsLevel5"
  | "sigils-The-Holdfasts-HoldfastsLevel4"
  | "sigils-The-Holdfasts-HoldfastsLevel3"
  | "sigils-The-Holdfasts-HoldfastsLevel2"
  | "sigils-The-Holdfasts-HoldfastsLevel1"
  | "sigils-Steel-Meridian-SteelMeridianLevel5"
  | "sigils-Steel-Meridian-SteelMeridianLevel4"
  | "sigils-Steel-Meridian-SteelMeridianLevel3"
  | "sigils-Steel-Meridian-SteelMeridianLevel2"
  | "sigils-Steel-Meridian-SteelMeridianLevel1"
  | "sigils-Solaris-United-SolarisLevel5"
  | "sigils-Solaris-United-SolarisLevel4"
  | "sigils-Solaris-United-SolarisLevel3"
  | "sigils-Solaris-United-SolarisLevel2"
  | "sigils-Solaris-United-SolarisLevel1"
  | "sigils-Red-Veil-RedVeilLevel5"
  | "sigils-Red-Veil-RedVeilLevel4"
  | "sigils-Red-Veil-RedVeilLevel3"
  | "sigils-Red-Veil-RedVeilLevel2"
  | "sigils-Red-Veil-RedVeilLevel1"
  | "sigils-Ostron-OstronLevel5"
  | "sigils-Ostron-OstronLevel4"
  | "sigils-Ostron-OstronLevel3"
  | "sigils-Ostron-OstronLevel2"
  | "sigils-Ostron-OstronLevel1"
  | "sigils-New-Loka-NewLokaLevel5"
  | "sigils-New-Loka-NewLokaLevel4"
  | "sigils-New-Loka-NewLokaLevel3"
  | "sigils-New-Loka-NewLokaLevel2"
  | "sigils-New-Loka-NewLokaLevel1"
  | "sigils-Necraloid-NecraloidLevel3"
  | "sigils-Necraloid-NecraloidLevel2"
  | "sigils-Necraloid-NecraloidLevel1"
  | "sigils-Entrati-EntratiLevel5"
  | "sigils-Entrati-EntratiLevel4"
  | "sigils-Entrati-EntratiLevel3"
  | "sigils-Entrati-EntratiLevel2"
  | "sigils-Entrati-EntratiLevel1"
  | "sigils-Cephalon-Suda-CephalonSudaLevel5"
  | "sigils-Cephalon-Suda-CephalonSudaLevel4"
  | "sigils-Cephalon-Suda-CephalonSudaLevel3"
  | "sigils-Cephalon-Suda-CephalonSudaLevel2"
  | "sigils-Cephalon-Suda-CephalonSudaLevel1"
  | "sigils-Arbiters-of-Hexis-ArbitersLevel5"
  | "sigils-Arbiters-of-Hexis-ArbitersLevel4"
  | "sigils-Arbiters-of-Hexis-ArbitersLevel3"
  | "sigils-Arbiters-of-Hexis-ArbitersLevel2"
  | "sigils-Arbiters-of-Hexis-ArbitersLevel1";

export type WarframeSymbolsKey =
  | "Wfcd"
  | "TheHex"
  | "Standing"
  | "SpLogo"
  | "Solaris"
  | "Simaris"
  | "Ostron"
  | "NormalLogo"
  | "Nightwave"
  | "Nightmare"
  | "Loading"
  | "Hexis"
  | "Entrati"
  | "CrossplayLogo"
  | "Archwing"
  | "Arbitrations"
  | "SigilsNeutral"
  | "SigilsNegativeRank2"
  | "SigilsNegativeRank1"
  | "RequiemXata"
  | "RequiemVome"
  | "RequiemRis"
  | "RequiemOull"
  | "RequiemNetra"
  | "RequiemLohk"
  | "RequiemKhra"
  | "RequiemJahu"
  | "RequiemFass"
  | "NightwavesWeekly"
  | "NightwavesElite"
  | "NightwavesDaily"
  | "MenuWoundedInfestedPredator"
  | "MenuWoundedInfestedCritter"
  | "MenuWild"
  | "MenuWeapons"
  | "MenuWarframeOff"
  | "MenuWarframe"
  | "MenuVehiclesKdrive"
  | "MenuUtility2"
  | "MenuUtility"
  | "MenuTenets"
  | "MenuTeleport"
  | "MenuTactical"
  | "MenuSynthetics2"
  | "MenuSynthetics"
  | "MenuSwatch"
  | "MenuStrike"
  | "MenuStance"
  | "MenuSquareVial"
  | "MenuSolaris"
  | "MenuSkins"
  | "MenuSimaris"
  | "MenuSigils"
  | "MenuShotgun"
  | "MenuSentinel"
  | "MenuSalvage"
  | "MenuRoundVial"
  | "MenuRivenMod"
  | "MenuRifleOff"
  | "MenuRifle"
  | "MenuResourceDrone"
  | "MenuResearchTenno"
  | "MenuResearchRailjack"
  | "MenuResearchOrokin"
  | "MenuResearchInfested"
  | "MenuResearchGrineer"
  | "MenuResearchCorpus"
  | "MenuRequirementsMet"
  | "MenuRequiemRelic"
  | "MenuRequiemMod"
  | "MenuRelicNeo"
  | "MenuRelicMeso"
  | "MenuRelicLith"
  | "MenuRelicAxi"
  | "MenuRelic"
  | "MenuRelatedItems"
  | "MenuRailjackTurrets"
  | "MenuRailjackPilot"
  | "MenuRailjackOrdnance"
  | "MenuRailjackCountermeasures"
  | "MenuRailjackAbilities"
  | "MenuRailjack2"
  | "MenuRailjack"
  | "MenuQuestPickerMystery"
  | "MenuQuestPickerCompleted"
  | "MenuQuestPickerActive"
  | "MenuPurchase"
  | "MenuProspector"
  | "MenuPrimeParts"
  | "MenuPrimaryWeaponSpecial"
  | "MenuPrimaryWeaponSpeargun"
  | "MenuPrimaryWeaponSniper"
  | "MenuPrimaryWeaponShotgun"
  | "MenuPrimaryWeaponRifle"
  | "MenuPrimaryWeaponLauncher"
  | "MenuPrimaryWeaponBow"
  | "MenuPrexCategory"
  | "MenuPlayerShip"
  | "MenuPistol"
  | "MenuPilot"
  | "MenuPheromones"
  | "MenuParazonLongShadow2"
  | "MenuParazonLongShadow"
  | "MenuParazonLong"
  | "MenuParazon"
  | "MenuOxides"
  | "MenuOwnedBlueprint"
  | "MenuOrokinOn"
  | "MenuOperator"
  | "MenuNoggles"
  | "MenuNatural"
  | "MenuModularItem"
  | "MenuMods"
  | "MenuMkIII"
  | "MenuMkII"
  | "MenuMkI"
  | "MenuMisc"
  | "MenuMelee"
  | "MenuMechBoard"
  | "MenuMech"
  | "MenuMaterialsOff"
  | "MenuMaterials"
  | "MenuManufacturerZekti"
  | "MenuManufacturerVidar"
  | "MenuManufacturerSigma"
  | "MenuManufacturerLavan"
  | "MenuLotusEmblem"
  | "MenuLink"
  | "MenuLimitedTime"
  | "MenuLichCategory"
  | "MenuLab"
  | "MenuKuvaLichVanquished"
  | "MenuKuvaLichTraded"
  | "MenuKuvaLichConverted"
  | "MenuKuvaLichActive"
  | "MenuKubrow"
  | "MenuKeys"
  | "MenuKavat"
  | "MenuInfested"
  | "MenuIndividualObstacleCourse"
  | "MenuIncomplete"
  | "MenuHall"
  | "MenuGunnery"
  | "MenuGrip"
  | "MenuGrineer"
  | "MenuGlyph"
  | "MenuGift"
  | "MenuGhouls"
  | "MenuGeneticImprint"
  | "MenuGearWheel"
  | "MenuGear"
  | "MenuGarden"
  | "MenuGara"
  | "MenuFx"
  | "MenuFusion"
  | "MenuFishSmall"
  | "MenuFishMedium"
  | "MenuFishLarge"
  | "MenuFavorite"
  | "MenuExilus"
  | "MenuEquip"
  | "MenuEntrati"
  | "MenuEngineering"
  | "MenuEnergy"
  | "MenuEmotes"
  | "MenuDuplicate"
  | "MenuDrone"
  | "MenuDisplays"
  | "MenuCraftingMoaModel"
  | "MenuCraftingMoaGyro"
  | "MenuCraftingMoaCore"
  | "MenuCraftingMoaBrackets"
  | "MenuCraftingKitgunPrimaryGrip"
  | "MenuCraftingKitgunLoader"
  | "MenuCraftingKitgunGrip"
  | "MenuCraftingKitgunChamber"
  | "MenuCraftingKDriveReactor"
  | "MenuCraftingKDriveNose"
  | "MenuCraftingKDriveJet"
  | "MenuCraftingKDriveBoard"
  | "MenuCraftingHoundTail"
  | "MenuCraftingHoundLegs"
  | "MenuCraftingHoundHead"
  | "MenuCraftingHoundBody"
  | "MenuCraftingAmpScaffold"
  | "MenuCraftingAmpPrism"
  | "MenuCraftingAmpBrace"
  | "MenuCorpus"
  | "MenuConnector"
  | "MenuCommand"
  | "MenuClanObstacleCourse"
  | "MenuChangeSkins"
  | "MenuCetusElder"
  | "MenuCephalon"
  | "MenuCapacity"
  | "MenuCalx"
  | "MenuBuild"
  | "MenuBlueprint"
  | "MenuBiotics"
  | "MenuBile"
  | "MenuBarracks"
  | "MenuAvionicsTactical"
  | "MenuAvionicsSuper"
  | "MenuAvionicsOffensive"
  | "MenuAvionicsDefensive"
  | "MenuAvionics"
  | "MenuAura"
  | "MenuAugment"
  | "MenuArmor"
  | "MenuArchwingSecondary"
  | "MenuArchwingPrimary"
  | "MenuArchwingEmblem"
  | "MenuArchwingColour"
  | "MenuArchwing"
  | "MenuArcane"
  | "MenuAmp"
  | "MenuAll"
  | "KuvaKuvaflood"
  | "KuvaKuva"
  | "FissuresRequiem"
  | "FissuresNeo"
  | "FissuresMeso"
  | "FissuresLith"
  | "FissuresAxi"
  | "Fissures5"
  | "Fissures4"
  | "Fissures3"
  | "Fissures2"
  | "Fissures1"
  | "FactionsSentient"
  | "FactionsNarmer2"
  | "FactionsNarmer"
  | "FactionsMurmur"
  | "FactionsInfested"
  | "FactionsGrineer"
  | "FactionsCorrupted"
  | "FactionsCorpus"
  | "SigilsVoxSolarisVoxLevel5"
  | "SigilsVoxSolarisVoxLevel4"
  | "SigilsVoxSolarisVoxLevel3"
  | "SigilsVoxSolarisVoxLevel2"
  | "SigilsVoxSolarisVoxLevel1"
  | "SigilsVentKidsVentKidsLevel5"
  | "SigilsVentKidsVentKidsLevel4"
  | "SigilsVentKidsVentKidsLevel3"
  | "SigilsVentKidsVentKidsLevel2"
  | "SigilsVentKidsVentKidsLevel1"
  | "SigilsTheQuillsQuillsLevel5"
  | "SigilsTheQuillsQuillsLevel4"
  | "SigilsTheQuillsQuillsLevel3"
  | "SigilsTheQuillsQuillsLevel2"
  | "SigilsTheQuillsQuillsLevel1"
  | "SigilsThePerrinSequencePerrinLevel5"
  | "SigilsThePerrinSequencePerrinLevel4"
  | "SigilsThePerrinSequencePerrinLevel3"
  | "SigilsThePerrinSequencePerrinLevel2"
  | "SigilsThePerrinSequencePerrinLevel1"
  | "SigilsTheHoldfastsHoldfastsLevel5"
  | "SigilsTheHoldfastsHoldfastsLevel4"
  | "SigilsTheHoldfastsHoldfastsLevel3"
  | "SigilsTheHoldfastsHoldfastsLevel2"
  | "SigilsTheHoldfastsHoldfastsLevel1"
  | "SigilsSteelMeridianSteelMeridianLevel5"
  | "SigilsSteelMeridianSteelMeridianLevel4"
  | "SigilsSteelMeridianSteelMeridianLevel3"
  | "SigilsSteelMeridianSteelMeridianLevel2"
  | "SigilsSteelMeridianSteelMeridianLevel1"
  | "SigilsSolarisUnitedSolarisLevel5"
  | "SigilsSolarisUnitedSolarisLevel4"
  | "SigilsSolarisUnitedSolarisLevel3"
  | "SigilsSolarisUnitedSolarisLevel2"
  | "SigilsSolarisUnitedSolarisLevel1"
  | "SigilsRedVeilRedVeilLevel5"
  | "SigilsRedVeilRedVeilLevel4"
  | "SigilsRedVeilRedVeilLevel3"
  | "SigilsRedVeilRedVeilLevel2"
  | "SigilsRedVeilRedVeilLevel1"
  | "SigilsOstronOstronLevel5"
  | "SigilsOstronOstronLevel4"
  | "SigilsOstronOstronLevel3"
  | "SigilsOstronOstronLevel2"
  | "SigilsOstronOstronLevel1"
  | "SigilsNewLokaNewLokaLevel5"
  | "SigilsNewLokaNewLokaLevel4"
  | "SigilsNewLokaNewLokaLevel3"
  | "SigilsNewLokaNewLokaLevel2"
  | "SigilsNewLokaNewLokaLevel1"
  | "SigilsNecraloidNecraloidLevel3"
  | "SigilsNecraloidNecraloidLevel2"
  | "SigilsNecraloidNecraloidLevel1"
  | "SigilsEntratiEntratiLevel5"
  | "SigilsEntratiEntratiLevel4"
  | "SigilsEntratiEntratiLevel3"
  | "SigilsEntratiEntratiLevel2"
  | "SigilsEntratiEntratiLevel1"
  | "SigilsCephalonSudaCephalonSudaLevel5"
  | "SigilsCephalonSudaCephalonSudaLevel4"
  | "SigilsCephalonSudaCephalonSudaLevel3"
  | "SigilsCephalonSudaCephalonSudaLevel2"
  | "SigilsCephalonSudaCephalonSudaLevel1"
  | "SigilsArbitersOfHexisArbitersLevel5"
  | "SigilsArbitersOfHexisArbitersLevel4"
  | "SigilsArbitersOfHexisArbitersLevel3"
  | "SigilsArbitersOfHexisArbitersLevel2"
  | "SigilsArbitersOfHexisArbitersLevel1";

export enum WarframeSymbols {
  Wfcd = "wfcd",
  TheHex = "the_hex",
  Standing = "standing",
  SpLogo = "sp-logo",
  Solaris = "solaris",
  Simaris = "simaris",
  Ostron = "ostron",
  NormalLogo = "normal-logo",
  Nightwave = "nightwave",
  Nightmare = "nightmare",
  Loading = "loading",
  Hexis = "hexis",
  Entrati = "entrati",
  CrossplayLogo = "crossplay-logo",
  Archwing = "archwing",
  Arbitrations = "arbitrations",
  SigilsNeutral = "sigils-Neutral",
  SigilsNegativeRank2 = "sigils-NegativeRank2",
  SigilsNegativeRank1 = "sigils-NegativeRank1",
  RequiemXata = "requiem-Xata",
  RequiemVome = "requiem-Vome",
  RequiemRis = "requiem-Ris",
  RequiemOull = "requiem-Oull",
  RequiemNetra = "requiem-Netra",
  RequiemLohk = "requiem-Lohk",
  RequiemKhra = "requiem-Khra",
  RequiemJahu = "requiem-Jahu",
  RequiemFass = "requiem-Fass",
  NightwavesWeekly = "nightwaves-weekly",
  NightwavesElite = "nightwaves-elite",
  NightwavesDaily = "nightwaves-daily",
  MenuWoundedInfestedPredator = "menu-WoundedInfestedPredator",
  MenuWoundedInfestedCritter = "menu-WoundedInfestedCritter",
  MenuWild = "menu-Wild",
  MenuWeapons = "menu-Weapons",
  MenuWarframeOff = "menu-WarframeOff",
  MenuWarframe = "menu-Warframe",
  MenuVehiclesKdrive = "menu-VehiclesKdrive",
  MenuUtility2 = "menu-Utility2",
  MenuUtility = "menu-Utility",
  MenuTenets = "menu-Tenets",
  MenuTeleport = "menu-Teleport",
  MenuTactical = "menu-Tactical",
  MenuSynthetics2 = "menu-Synthetics2",
  MenuSynthetics = "menu-Synthetics",
  MenuSwatch = "menu-Swatch",
  MenuStrike = "menu-Strike",
  MenuStance = "menu-Stance",
  MenuSquareVial = "menu-SquareVial",
  MenuSolaris = "menu-Solaris",
  MenuSkins = "menu-Skins",
  MenuSimaris = "menu-Simaris",
  MenuSigils = "menu-Sigils",
  MenuShotgun = "menu-Shotgun",
  MenuSentinel = "menu-Sentinel",
  MenuSalvage = "menu-Salvage",
  MenuRoundVial = "menu-RoundVial",
  MenuRivenMod = "menu-RivenMod",
  MenuRifleOff = "menu-RifleOff",
  MenuRifle = "menu-Rifle",
  MenuResourceDrone = "menu-ResourceDrone",
  MenuResearchTenno = "menu-ResearchTenno",
  MenuResearchRailjack = "menu-ResearchRailjack",
  MenuResearchOrokin = "menu-ResearchOrokin",
  MenuResearchInfested = "menu-ResearchInfested",
  MenuResearchGrineer = "menu-ResearchGrineer",
  MenuResearchCorpus = "menu-ResearchCorpus",
  MenuRequirementsMet = "menu-RequirementsMet",
  MenuRequiemRelic = "menu-RequiemRelic",
  MenuRequiemMod = "menu-RequiemMod",
  MenuRelicNeo = "menu-RelicNeo",
  MenuRelicMeso = "menu-RelicMeso",
  MenuRelicLith = "menu-RelicLith",
  MenuRelicAxi = "menu-RelicAxi",
  MenuRelic = "menu-Relic",
  MenuRelatedItems = "menu-RelatedItems",
  MenuRailjackTurrets = "menu-RailjackTurrets",
  MenuRailjackPilot = "menu-RailjackPilot",
  MenuRailjackOrdnance = "menu-RailjackOrdnance",
  MenuRailjackCountermeasures = "menu-RailjackCountermeasures",
  MenuRailjackAbilities = "menu-RailjackAbilities",
  MenuRailjack2 = "menu-Railjack2",
  MenuRailjack = "menu-Railjack",
  MenuQuestPickerMystery = "menu-QuestPickerMystery",
  MenuQuestPickerCompleted = "menu-QuestPickerCompleted",
  MenuQuestPickerActive = "menu-QuestPickerActive",
  MenuPurchase = "menu-Purchase",
  MenuProspector = "menu-Prospector",
  MenuPrimeParts = "menu-PrimeParts",
  MenuPrimaryWeaponSpecial = "menu-PrimaryWeaponSpecial",
  MenuPrimaryWeaponSpeargun = "menu-PrimaryWeaponSpeargun",
  MenuPrimaryWeaponSniper = "menu-PrimaryWeaponSniper",
  MenuPrimaryWeaponShotgun = "menu-PrimaryWeaponShotgun",
  MenuPrimaryWeaponRifle = "menu-PrimaryWeaponRifle",
  MenuPrimaryWeaponLauncher = "menu-PrimaryWeaponLauncher",
  MenuPrimaryWeaponBow = "menu-PrimaryWeaponBow",
  MenuPrexCategory = "menu-PrexCategory",
  MenuPlayerShip = "menu-PlayerShip",
  MenuPistol = "menu-Pistol",
  MenuPilot = "menu-Pilot",
  MenuPheromones = "menu-Pheromones",
  MenuParazonLongShadow2 = "menu-ParazonLongShadow2",
  MenuParazonLongShadow = "menu-ParazonLongShadow",
  MenuParazonLong = "menu-ParazonLong",
  MenuParazon = "menu-Parazon",
  MenuOxides = "menu-Oxides",
  MenuOwnedBlueprint = "menu-OwnedBlueprint",
  MenuOrokinOn = "menu-OrokinOn",
  MenuOperator = "menu-Operator",
  MenuNoggles = "menu-Noggles",
  MenuNatural = "menu-Natural",
  MenuModularItem = "menu-ModularItem",
  MenuMods = "menu-Mods",
  MenuMkIII = "menu-MkIII",
  MenuMkII = "menu-MkII",
  MenuMkI = "menu-MkI",
  MenuMisc = "menu-Misc",
  MenuMelee = "menu-Melee",
  MenuMechBoard = "menu-MechBoard",
  MenuMech = "menu-Mech",
  MenuMaterialsOff = "menu-MaterialsOff",
  MenuMaterials = "menu-Materials",
  MenuManufacturerZekti = "menu-ManufacturerZekti",
  MenuManufacturerVidar = "menu-ManufacturerVidar",
  MenuManufacturerSigma = "menu-ManufacturerSigma",
  MenuManufacturerLavan = "menu-ManufacturerLavan",
  MenuLotusEmblem = "menu-LotusEmblem",
  MenuLink = "menu-Link",
  MenuLimitedTime = "menu-LimitedTime",
  MenuLichCategory = "menu-LichCategory",
  MenuLab = "menu-Lab",
  MenuKuvaLichVanquished = "menu-KuvaLichVanquished",
  MenuKuvaLichTraded = "menu-KuvaLichTraded",
  MenuKuvaLichConverted = "menu-KuvaLichConverted",
  MenuKuvaLichActive = "menu-KuvaLichActive",
  MenuKubrow = "menu-Kubrow",
  MenuKeys = "menu-Keys",
  MenuKavat = "menu-Kavat",
  MenuInfested = "menu-Infested",
  MenuIndividualObstacleCourse = "menu-IndividualObstacleCourse",
  MenuIncomplete = "menu-Incomplete",
  MenuHall = "menu-Hall",
  MenuGunnery = "menu-Gunnery",
  MenuGrip = "menu-Grip",
  MenuGrineer = "menu-Grineer",
  MenuGlyph = "menu-Glyph",
  MenuGift = "menu-Gift",
  MenuGhouls = "menu-Ghouls",
  MenuGeneticImprint = "menu-GeneticImprint",
  MenuGearWheel = "menu-GearWheel",
  MenuGear = "menu-Gear",
  MenuGarden = "menu-Garden",
  MenuGara = "menu-Gara",
  MenuFx = "menu-Fx",
  MenuFusion = "menu-Fusion",
  MenuFishSmall = "menu-FishSmall",
  MenuFishMedium = "menu-FishMedium",
  MenuFishLarge = "menu-FishLarge",
  MenuFavorite = "menu-Favorite",
  MenuExilus = "menu-Exilus",
  MenuEquip = "menu-Equip",
  MenuEntrati = "menu-Entrati",
  MenuEngineering = "menu-Engineering",
  MenuEnergy = "menu-Energy",
  MenuEmotes = "menu-Emotes",
  MenuDuplicate = "menu-Duplicate",
  MenuDrone = "menu-Drone",
  MenuDisplays = "menu-Displays",
  MenuCraftingMoaModel = "menu-CraftingMoaModel",
  MenuCraftingMoaGyro = "menu-CraftingMoaGyro",
  MenuCraftingMoaCore = "menu-CraftingMoaCore",
  MenuCraftingMoaBrackets = "menu-CraftingMoaBrackets",
  MenuCraftingKitgunPrimaryGrip = "menu-CraftingKitgunPrimaryGrip",
  MenuCraftingKitgunLoader = "menu-CraftingKitgunLoader",
  MenuCraftingKitgunGrip = "menu-CraftingKitgunGrip",
  MenuCraftingKitgunChamber = "menu-CraftingKitgunChamber",
  MenuCraftingKDriveReactor = "menu-CraftingKDriveReactor",
  MenuCraftingKDriveNose = "menu-CraftingKDriveNose",
  MenuCraftingKDriveJet = "menu-CraftingKDriveJet",
  MenuCraftingKDriveBoard = "menu-CraftingKDriveBoard",
  MenuCraftingHoundTail = "menu-CraftingHoundTail",
  MenuCraftingHoundLegs = "menu-CraftingHoundLegs",
  MenuCraftingHoundHead = "menu-CraftingHoundHead",
  MenuCraftingHoundBody = "menu-CraftingHoundBody",
  MenuCraftingAmpScaffold = "menu-CraftingAmpScaffold",
  MenuCraftingAmpPrism = "menu-CraftingAmpPrism",
  MenuCraftingAmpBrace = "menu-CraftingAmpBrace",
  MenuCorpus = "menu-Corpus",
  MenuConnector = "menu-Connector",
  MenuCommand = "menu-Command",
  MenuClanObstacleCourse = "menu-ClanObstacleCourse",
  MenuChangeSkins = "menu-ChangeSkins",
  MenuCetusElder = "menu-CetusElder",
  MenuCephalon = "menu-Cephalon",
  MenuCapacity = "menu-Capacity",
  MenuCalx = "menu-Calx",
  MenuBuild = "menu-Build",
  MenuBlueprint = "menu-Blueprint",
  MenuBiotics = "menu-Biotics",
  MenuBile = "menu-Bile",
  MenuBarracks = "menu-Barracks",
  MenuAvionicsTactical = "menu-AvionicsTactical",
  MenuAvionicsSuper = "menu-AvionicsSuper",
  MenuAvionicsOffensive = "menu-AvionicsOffensive",
  MenuAvionicsDefensive = "menu-AvionicsDefensive",
  MenuAvionics = "menu-Avionics",
  MenuAura = "menu-Aura",
  MenuAugment = "menu-Augment",
  MenuArmor = "menu-Armor",
  MenuArchwingSecondary = "menu-ArchwingSecondary",
  MenuArchwingPrimary = "menu-ArchwingPrimary",
  MenuArchwingEmblem = "menu-ArchwingEmblem",
  MenuArchwingColour = "menu-ArchwingColour",
  MenuArchwing = "menu-Archwing",
  MenuArcane = "menu-Arcane",
  MenuAmp = "menu-Amp",
  MenuAll = "menu-All",
  KuvaKuvaflood = "kuva-kuvaflood",
  KuvaKuva = "kuva-kuva",
  FissuresRequiem = "fissures-requiem",
  FissuresNeo = "fissures-neo",
  FissuresMeso = "fissures-meso",
  FissuresLith = "fissures-lith",
  FissuresAxi = "fissures-axi",
  Fissures5 = "fissures-5",
  Fissures4 = "fissures-4",
  Fissures3 = "fissures-3",
  Fissures2 = "fissures-2",
  Fissures1 = "fissures-1",
  FactionsSentient = "factions-sentient",
  FactionsNarmer2 = "factions-narmer2",
  FactionsNarmer = "factions-narmer",
  FactionsMurmur = "factions-murmur",
  FactionsInfested = "factions-infested",
  FactionsGrineer = "factions-grineer",
  FactionsCorrupted = "factions-corrupted",
  FactionsCorpus = "factions-corpus",
  SigilsVoxSolarisVoxLevel5 = "sigils-Vox-Solaris-VoxLevel5",
  SigilsVoxSolarisVoxLevel4 = "sigils-Vox-Solaris-VoxLevel4",
  SigilsVoxSolarisVoxLevel3 = "sigils-Vox-Solaris-VoxLevel3",
  SigilsVoxSolarisVoxLevel2 = "sigils-Vox-Solaris-VoxLevel2",
  SigilsVoxSolarisVoxLevel1 = "sigils-Vox-Solaris-VoxLevel1",
  SigilsVentKidsVentKidsLevel5 = "sigils-VentKids-VentKidsLevel5",
  SigilsVentKidsVentKidsLevel4 = "sigils-VentKids-VentKidsLevel4",
  SigilsVentKidsVentKidsLevel3 = "sigils-VentKids-VentKidsLevel3",
  SigilsVentKidsVentKidsLevel2 = "sigils-VentKids-VentKidsLevel2",
  SigilsVentKidsVentKidsLevel1 = "sigils-VentKids-VentKidsLevel1",
  SigilsTheQuillsQuillsLevel5 = "sigils-The-Quills-QuillsLevel5",
  SigilsTheQuillsQuillsLevel4 = "sigils-The-Quills-QuillsLevel4",
  SigilsTheQuillsQuillsLevel3 = "sigils-The-Quills-QuillsLevel3",
  SigilsTheQuillsQuillsLevel2 = "sigils-The-Quills-QuillsLevel2",
  SigilsTheQuillsQuillsLevel1 = "sigils-The-Quills-QuillsLevel1",
  SigilsThePerrinSequencePerrinLevel5 = "sigils-The-Perrin-Sequence-PerrinLevel5",
  SigilsThePerrinSequencePerrinLevel4 = "sigils-The-Perrin-Sequence-PerrinLevel4",
  SigilsThePerrinSequencePerrinLevel3 = "sigils-The-Perrin-Sequence-PerrinLevel3",
  SigilsThePerrinSequencePerrinLevel2 = "sigils-The-Perrin-Sequence-PerrinLevel2",
  SigilsThePerrinSequencePerrinLevel1 = "sigils-The-Perrin-Sequence-PerrinLevel1",
  SigilsTheHoldfastsHoldfastsLevel5 = "sigils-The-Holdfasts-HoldfastsLevel5",
  SigilsTheHoldfastsHoldfastsLevel4 = "sigils-The-Holdfasts-HoldfastsLevel4",
  SigilsTheHoldfastsHoldfastsLevel3 = "sigils-The-Holdfasts-HoldfastsLevel3",
  SigilsTheHoldfastsHoldfastsLevel2 = "sigils-The-Holdfasts-HoldfastsLevel2",
  SigilsTheHoldfastsHoldfastsLevel1 = "sigils-The-Holdfasts-HoldfastsLevel1",
  SigilsSteelMeridianSteelMeridianLevel5 = "sigils-Steel-Meridian-SteelMeridianLevel5",
  SigilsSteelMeridianSteelMeridianLevel4 = "sigils-Steel-Meridian-SteelMeridianLevel4",
  SigilsSteelMeridianSteelMeridianLevel3 = "sigils-Steel-Meridian-SteelMeridianLevel3",
  SigilsSteelMeridianSteelMeridianLevel2 = "sigils-Steel-Meridian-SteelMeridianLevel2",
  SigilsSteelMeridianSteelMeridianLevel1 = "sigils-Steel-Meridian-SteelMeridianLevel1",
  SigilsSolarisUnitedSolarisLevel5 = "sigils-Solaris-United-SolarisLevel5",
  SigilsSolarisUnitedSolarisLevel4 = "sigils-Solaris-United-SolarisLevel4",
  SigilsSolarisUnitedSolarisLevel3 = "sigils-Solaris-United-SolarisLevel3",
  SigilsSolarisUnitedSolarisLevel2 = "sigils-Solaris-United-SolarisLevel2",
  SigilsSolarisUnitedSolarisLevel1 = "sigils-Solaris-United-SolarisLevel1",
  SigilsRedVeilRedVeilLevel5 = "sigils-Red-Veil-RedVeilLevel5",
  SigilsRedVeilRedVeilLevel4 = "sigils-Red-Veil-RedVeilLevel4",
  SigilsRedVeilRedVeilLevel3 = "sigils-Red-Veil-RedVeilLevel3",
  SigilsRedVeilRedVeilLevel2 = "sigils-Red-Veil-RedVeilLevel2",
  SigilsRedVeilRedVeilLevel1 = "sigils-Red-Veil-RedVeilLevel1",
  SigilsOstronOstronLevel5 = "sigils-Ostron-OstronLevel5",
  SigilsOstronOstronLevel4 = "sigils-Ostron-OstronLevel4",
  SigilsOstronOstronLevel3 = "sigils-Ostron-OstronLevel3",
  SigilsOstronOstronLevel2 = "sigils-Ostron-OstronLevel2",
  SigilsOstronOstronLevel1 = "sigils-Ostron-OstronLevel1",
  SigilsNewLokaNewLokaLevel5 = "sigils-New-Loka-NewLokaLevel5",
  SigilsNewLokaNewLokaLevel4 = "sigils-New-Loka-NewLokaLevel4",
  SigilsNewLokaNewLokaLevel3 = "sigils-New-Loka-NewLokaLevel3",
  SigilsNewLokaNewLokaLevel2 = "sigils-New-Loka-NewLokaLevel2",
  SigilsNewLokaNewLokaLevel1 = "sigils-New-Loka-NewLokaLevel1",
  SigilsNecraloidNecraloidLevel3 = "sigils-Necraloid-NecraloidLevel3",
  SigilsNecraloidNecraloidLevel2 = "sigils-Necraloid-NecraloidLevel2",
  SigilsNecraloidNecraloidLevel1 = "sigils-Necraloid-NecraloidLevel1",
  SigilsEntratiEntratiLevel5 = "sigils-Entrati-EntratiLevel5",
  SigilsEntratiEntratiLevel4 = "sigils-Entrati-EntratiLevel4",
  SigilsEntratiEntratiLevel3 = "sigils-Entrati-EntratiLevel3",
  SigilsEntratiEntratiLevel2 = "sigils-Entrati-EntratiLevel2",
  SigilsEntratiEntratiLevel1 = "sigils-Entrati-EntratiLevel1",
  SigilsCephalonSudaCephalonSudaLevel5 = "sigils-Cephalon-Suda-CephalonSudaLevel5",
  SigilsCephalonSudaCephalonSudaLevel4 = "sigils-Cephalon-Suda-CephalonSudaLevel4",
  SigilsCephalonSudaCephalonSudaLevel3 = "sigils-Cephalon-Suda-CephalonSudaLevel3",
  SigilsCephalonSudaCephalonSudaLevel2 = "sigils-Cephalon-Suda-CephalonSudaLevel2",
  SigilsCephalonSudaCephalonSudaLevel1 = "sigils-Cephalon-Suda-CephalonSudaLevel1",
  SigilsArbitersOfHexisArbitersLevel5 = "sigils-Arbiters-of-Hexis-ArbitersLevel5",
  SigilsArbitersOfHexisArbitersLevel4 = "sigils-Arbiters-of-Hexis-ArbitersLevel4",
  SigilsArbitersOfHexisArbitersLevel3 = "sigils-Arbiters-of-Hexis-ArbitersLevel3",
  SigilsArbitersOfHexisArbitersLevel2 = "sigils-Arbiters-of-Hexis-ArbitersLevel2",
  SigilsArbitersOfHexisArbitersLevel1 = "sigils-Arbiters-of-Hexis-ArbitersLevel1",
}

export const WARFRAME_SYMBOLS_CODEPOINTS: { [key in WarframeSymbols]: string } = {
  [WarframeSymbols.Wfcd]: "61697",
  [WarframeSymbols.TheHex]: "61698",
  [WarframeSymbols.Standing]: "61699",
  [WarframeSymbols.SpLogo]: "61700",
  [WarframeSymbols.Solaris]: "61701",
  [WarframeSymbols.Simaris]: "61702",
  [WarframeSymbols.Ostron]: "61703",
  [WarframeSymbols.NormalLogo]: "61704",
  [WarframeSymbols.Nightwave]: "61705",
  [WarframeSymbols.Nightmare]: "61706",
  [WarframeSymbols.Loading]: "61707",
  [WarframeSymbols.Hexis]: "61708",
  [WarframeSymbols.Entrati]: "61709",
  [WarframeSymbols.CrossplayLogo]: "61710",
  [WarframeSymbols.Archwing]: "61711",
  [WarframeSymbols.Arbitrations]: "61712",
  [WarframeSymbols.SigilsNeutral]: "61713",
  [WarframeSymbols.SigilsNegativeRank2]: "61714",
  [WarframeSymbols.SigilsNegativeRank1]: "61715",
  [WarframeSymbols.RequiemXata]: "61716",
  [WarframeSymbols.RequiemVome]: "61717",
  [WarframeSymbols.RequiemRis]: "61718",
  [WarframeSymbols.RequiemOull]: "61719",
  [WarframeSymbols.RequiemNetra]: "61720",
  [WarframeSymbols.RequiemLohk]: "61721",
  [WarframeSymbols.RequiemKhra]: "61722",
  [WarframeSymbols.RequiemJahu]: "61723",
  [WarframeSymbols.RequiemFass]: "61724",
  [WarframeSymbols.NightwavesWeekly]: "61725",
  [WarframeSymbols.NightwavesElite]: "61726",
  [WarframeSymbols.NightwavesDaily]: "61727",
  [WarframeSymbols.MenuWoundedInfestedPredator]: "61728",
  [WarframeSymbols.MenuWoundedInfestedCritter]: "61729",
  [WarframeSymbols.MenuWild]: "61730",
  [WarframeSymbols.MenuWeapons]: "61731",
  [WarframeSymbols.MenuWarframeOff]: "61732",
  [WarframeSymbols.MenuWarframe]: "61733",
  [WarframeSymbols.MenuVehiclesKdrive]: "61734",
  [WarframeSymbols.MenuUtility2]: "61735",
  [WarframeSymbols.MenuUtility]: "61736",
  [WarframeSymbols.MenuTenets]: "61737",
  [WarframeSymbols.MenuTeleport]: "61738",
  [WarframeSymbols.MenuTactical]: "61739",
  [WarframeSymbols.MenuSynthetics2]: "61740",
  [WarframeSymbols.MenuSynthetics]: "61741",
  [WarframeSymbols.MenuSwatch]: "61742",
  [WarframeSymbols.MenuStrike]: "61743",
  [WarframeSymbols.MenuStance]: "61744",
  [WarframeSymbols.MenuSquareVial]: "61745",
  [WarframeSymbols.MenuSolaris]: "61746",
  [WarframeSymbols.MenuSkins]: "61747",
  [WarframeSymbols.MenuSimaris]: "61748",
  [WarframeSymbols.MenuSigils]: "61749",
  [WarframeSymbols.MenuShotgun]: "61750",
  [WarframeSymbols.MenuSentinel]: "61751",
  [WarframeSymbols.MenuSalvage]: "61752",
  [WarframeSymbols.MenuRoundVial]: "61753",
  [WarframeSymbols.MenuRivenMod]: "61754",
  [WarframeSymbols.MenuRifleOff]: "61755",
  [WarframeSymbols.MenuRifle]: "61756",
  [WarframeSymbols.MenuResourceDrone]: "61757",
  [WarframeSymbols.MenuResearchTenno]: "61758",
  [WarframeSymbols.MenuResearchRailjack]: "61759",
  [WarframeSymbols.MenuResearchOrokin]: "61760",
  [WarframeSymbols.MenuResearchInfested]: "61761",
  [WarframeSymbols.MenuResearchGrineer]: "61762",
  [WarframeSymbols.MenuResearchCorpus]: "61763",
  [WarframeSymbols.MenuRequirementsMet]: "61764",
  [WarframeSymbols.MenuRequiemRelic]: "61765",
  [WarframeSymbols.MenuRequiemMod]: "61766",
  [WarframeSymbols.MenuRelicNeo]: "61767",
  [WarframeSymbols.MenuRelicMeso]: "61768",
  [WarframeSymbols.MenuRelicLith]: "61769",
  [WarframeSymbols.MenuRelicAxi]: "61770",
  [WarframeSymbols.MenuRelic]: "61771",
  [WarframeSymbols.MenuRelatedItems]: "61772",
  [WarframeSymbols.MenuRailjackTurrets]: "61773",
  [WarframeSymbols.MenuRailjackPilot]: "61774",
  [WarframeSymbols.MenuRailjackOrdnance]: "61775",
  [WarframeSymbols.MenuRailjackCountermeasures]: "61776",
  [WarframeSymbols.MenuRailjackAbilities]: "61777",
  [WarframeSymbols.MenuRailjack2]: "61778",
  [WarframeSymbols.MenuRailjack]: "61779",
  [WarframeSymbols.MenuQuestPickerMystery]: "61780",
  [WarframeSymbols.MenuQuestPickerCompleted]: "61781",
  [WarframeSymbols.MenuQuestPickerActive]: "61782",
  [WarframeSymbols.MenuPurchase]: "61783",
  [WarframeSymbols.MenuProspector]: "61784",
  [WarframeSymbols.MenuPrimeParts]: "61785",
  [WarframeSymbols.MenuPrimaryWeaponSpecial]: "61786",
  [WarframeSymbols.MenuPrimaryWeaponSpeargun]: "61787",
  [WarframeSymbols.MenuPrimaryWeaponSniper]: "61788",
  [WarframeSymbols.MenuPrimaryWeaponShotgun]: "61789",
  [WarframeSymbols.MenuPrimaryWeaponRifle]: "61790",
  [WarframeSymbols.MenuPrimaryWeaponLauncher]: "61791",
  [WarframeSymbols.MenuPrimaryWeaponBow]: "61792",
  [WarframeSymbols.MenuPrexCategory]: "61793",
  [WarframeSymbols.MenuPlayerShip]: "61794",
  [WarframeSymbols.MenuPistol]: "61795",
  [WarframeSymbols.MenuPilot]: "61796",
  [WarframeSymbols.MenuPheromones]: "61797",
  [WarframeSymbols.MenuParazonLongShadow2]: "61798",
  [WarframeSymbols.MenuParazonLongShadow]: "61799",
  [WarframeSymbols.MenuParazonLong]: "61800",
  [WarframeSymbols.MenuParazon]: "61801",
  [WarframeSymbols.MenuOxides]: "61802",
  [WarframeSymbols.MenuOwnedBlueprint]: "61803",
  [WarframeSymbols.MenuOrokinOn]: "61804",
  [WarframeSymbols.MenuOperator]: "61805",
  [WarframeSymbols.MenuNoggles]: "61806",
  [WarframeSymbols.MenuNatural]: "61807",
  [WarframeSymbols.MenuModularItem]: "61808",
  [WarframeSymbols.MenuMods]: "61809",
  [WarframeSymbols.MenuMkIII]: "61810",
  [WarframeSymbols.MenuMkII]: "61811",
  [WarframeSymbols.MenuMkI]: "61812",
  [WarframeSymbols.MenuMisc]: "61813",
  [WarframeSymbols.MenuMelee]: "61814",
  [WarframeSymbols.MenuMechBoard]: "61815",
  [WarframeSymbols.MenuMech]: "61816",
  [WarframeSymbols.MenuMaterialsOff]: "61817",
  [WarframeSymbols.MenuMaterials]: "61818",
  [WarframeSymbols.MenuManufacturerZekti]: "61819",
  [WarframeSymbols.MenuManufacturerVidar]: "61820",
  [WarframeSymbols.MenuManufacturerSigma]: "61821",
  [WarframeSymbols.MenuManufacturerLavan]: "61822",
  [WarframeSymbols.MenuLotusEmblem]: "61823",
  [WarframeSymbols.MenuLink]: "61824",
  [WarframeSymbols.MenuLimitedTime]: "61825",
  [WarframeSymbols.MenuLichCategory]: "61826",
  [WarframeSymbols.MenuLab]: "61827",
  [WarframeSymbols.MenuKuvaLichVanquished]: "61828",
  [WarframeSymbols.MenuKuvaLichTraded]: "61829",
  [WarframeSymbols.MenuKuvaLichConverted]: "61830",
  [WarframeSymbols.MenuKuvaLichActive]: "61831",
  [WarframeSymbols.MenuKubrow]: "61832",
  [WarframeSymbols.MenuKeys]: "61833",
  [WarframeSymbols.MenuKavat]: "61834",
  [WarframeSymbols.MenuInfested]: "61835",
  [WarframeSymbols.MenuIndividualObstacleCourse]: "61836",
  [WarframeSymbols.MenuIncomplete]: "61837",
  [WarframeSymbols.MenuHall]: "61838",
  [WarframeSymbols.MenuGunnery]: "61839",
  [WarframeSymbols.MenuGrip]: "61840",
  [WarframeSymbols.MenuGrineer]: "61841",
  [WarframeSymbols.MenuGlyph]: "61842",
  [WarframeSymbols.MenuGift]: "61843",
  [WarframeSymbols.MenuGhouls]: "61844",
  [WarframeSymbols.MenuGeneticImprint]: "61845",
  [WarframeSymbols.MenuGearWheel]: "61846",
  [WarframeSymbols.MenuGear]: "61847",
  [WarframeSymbols.MenuGarden]: "61848",
  [WarframeSymbols.MenuGara]: "61849",
  [WarframeSymbols.MenuFx]: "61850",
  [WarframeSymbols.MenuFusion]: "61851",
  [WarframeSymbols.MenuFishSmall]: "61852",
  [WarframeSymbols.MenuFishMedium]: "61853",
  [WarframeSymbols.MenuFishLarge]: "61854",
  [WarframeSymbols.MenuFavorite]: "61855",
  [WarframeSymbols.MenuExilus]: "61856",
  [WarframeSymbols.MenuEquip]: "61857",
  [WarframeSymbols.MenuEntrati]: "61858",
  [WarframeSymbols.MenuEngineering]: "61859",
  [WarframeSymbols.MenuEnergy]: "61860",
  [WarframeSymbols.MenuEmotes]: "61861",
  [WarframeSymbols.MenuDuplicate]: "61862",
  [WarframeSymbols.MenuDrone]: "61863",
  [WarframeSymbols.MenuDisplays]: "61864",
  [WarframeSymbols.MenuCraftingMoaModel]: "61865",
  [WarframeSymbols.MenuCraftingMoaGyro]: "61866",
  [WarframeSymbols.MenuCraftingMoaCore]: "61867",
  [WarframeSymbols.MenuCraftingMoaBrackets]: "61868",
  [WarframeSymbols.MenuCraftingKitgunPrimaryGrip]: "61869",
  [WarframeSymbols.MenuCraftingKitgunLoader]: "61870",
  [WarframeSymbols.MenuCraftingKitgunGrip]: "61871",
  [WarframeSymbols.MenuCraftingKitgunChamber]: "61872",
  [WarframeSymbols.MenuCraftingKDriveReactor]: "61873",
  [WarframeSymbols.MenuCraftingKDriveNose]: "61874",
  [WarframeSymbols.MenuCraftingKDriveJet]: "61875",
  [WarframeSymbols.MenuCraftingKDriveBoard]: "61876",
  [WarframeSymbols.MenuCraftingHoundTail]: "61877",
  [WarframeSymbols.MenuCraftingHoundLegs]: "61878",
  [WarframeSymbols.MenuCraftingHoundHead]: "61879",
  [WarframeSymbols.MenuCraftingHoundBody]: "61880",
  [WarframeSymbols.MenuCraftingAmpScaffold]: "61881",
  [WarframeSymbols.MenuCraftingAmpPrism]: "61882",
  [WarframeSymbols.MenuCraftingAmpBrace]: "61883",
  [WarframeSymbols.MenuCorpus]: "61884",
  [WarframeSymbols.MenuConnector]: "61885",
  [WarframeSymbols.MenuCommand]: "61886",
  [WarframeSymbols.MenuClanObstacleCourse]: "61887",
  [WarframeSymbols.MenuChangeSkins]: "61888",
  [WarframeSymbols.MenuCetusElder]: "61889",
  [WarframeSymbols.MenuCephalon]: "61890",
  [WarframeSymbols.MenuCapacity]: "61891",
  [WarframeSymbols.MenuCalx]: "61892",
  [WarframeSymbols.MenuBuild]: "61893",
  [WarframeSymbols.MenuBlueprint]: "61894",
  [WarframeSymbols.MenuBiotics]: "61895",
  [WarframeSymbols.MenuBile]: "61896",
  [WarframeSymbols.MenuBarracks]: "61897",
  [WarframeSymbols.MenuAvionicsTactical]: "61898",
  [WarframeSymbols.MenuAvionicsSuper]: "61899",
  [WarframeSymbols.MenuAvionicsOffensive]: "61900",
  [WarframeSymbols.MenuAvionicsDefensive]: "61901",
  [WarframeSymbols.MenuAvionics]: "61902",
  [WarframeSymbols.MenuAura]: "61903",
  [WarframeSymbols.MenuAugment]: "61904",
  [WarframeSymbols.MenuArmor]: "61905",
  [WarframeSymbols.MenuArchwingSecondary]: "61906",
  [WarframeSymbols.MenuArchwingPrimary]: "61907",
  [WarframeSymbols.MenuArchwingEmblem]: "61908",
  [WarframeSymbols.MenuArchwingColour]: "61909",
  [WarframeSymbols.MenuArchwing]: "61910",
  [WarframeSymbols.MenuArcane]: "61911",
  [WarframeSymbols.MenuAmp]: "61912",
  [WarframeSymbols.MenuAll]: "61913",
  [WarframeSymbols.KuvaKuvaflood]: "61914",
  [WarframeSymbols.KuvaKuva]: "61915",
  [WarframeSymbols.FissuresRequiem]: "61916",
  [WarframeSymbols.FissuresNeo]: "61917",
  [WarframeSymbols.FissuresMeso]: "61918",
  [WarframeSymbols.FissuresLith]: "61919",
  [WarframeSymbols.FissuresAxi]: "61920",
  [WarframeSymbols.Fissures5]: "61921",
  [WarframeSymbols.Fissures4]: "61922",
  [WarframeSymbols.Fissures3]: "61923",
  [WarframeSymbols.Fissures2]: "61924",
  [WarframeSymbols.Fissures1]: "61925",
  [WarframeSymbols.FactionsSentient]: "61926",
  [WarframeSymbols.FactionsNarmer2]: "61927",
  [WarframeSymbols.FactionsNarmer]: "61928",
  [WarframeSymbols.FactionsMurmur]: "61929",
  [WarframeSymbols.FactionsInfested]: "61930",
  [WarframeSymbols.FactionsGrineer]: "61931",
  [WarframeSymbols.FactionsCorrupted]: "61932",
  [WarframeSymbols.FactionsCorpus]: "61933",
  [WarframeSymbols.SigilsVoxSolarisVoxLevel5]: "61934",
  [WarframeSymbols.SigilsVoxSolarisVoxLevel4]: "61935",
  [WarframeSymbols.SigilsVoxSolarisVoxLevel3]: "61936",
  [WarframeSymbols.SigilsVoxSolarisVoxLevel2]: "61937",
  [WarframeSymbols.SigilsVoxSolarisVoxLevel1]: "61938",
  [WarframeSymbols.SigilsVentKidsVentKidsLevel5]: "61939",
  [WarframeSymbols.SigilsVentKidsVentKidsLevel4]: "61940",
  [WarframeSymbols.SigilsVentKidsVentKidsLevel3]: "61941",
  [WarframeSymbols.SigilsVentKidsVentKidsLevel2]: "61942",
  [WarframeSymbols.SigilsVentKidsVentKidsLevel1]: "61943",
  [WarframeSymbols.SigilsTheQuillsQuillsLevel5]: "61944",
  [WarframeSymbols.SigilsTheQuillsQuillsLevel4]: "61945",
  [WarframeSymbols.SigilsTheQuillsQuillsLevel3]: "61946",
  [WarframeSymbols.SigilsTheQuillsQuillsLevel2]: "61947",
  [WarframeSymbols.SigilsTheQuillsQuillsLevel1]: "61948",
  [WarframeSymbols.SigilsThePerrinSequencePerrinLevel5]: "61949",
  [WarframeSymbols.SigilsThePerrinSequencePerrinLevel4]: "61950",
  [WarframeSymbols.SigilsThePerrinSequencePerrinLevel3]: "61951",
  [WarframeSymbols.SigilsThePerrinSequencePerrinLevel2]: "61952",
  [WarframeSymbols.SigilsThePerrinSequencePerrinLevel1]: "61953",
  [WarframeSymbols.SigilsTheHoldfastsHoldfastsLevel5]: "61954",
  [WarframeSymbols.SigilsTheHoldfastsHoldfastsLevel4]: "61955",
  [WarframeSymbols.SigilsTheHoldfastsHoldfastsLevel3]: "61956",
  [WarframeSymbols.SigilsTheHoldfastsHoldfastsLevel2]: "61957",
  [WarframeSymbols.SigilsTheHoldfastsHoldfastsLevel1]: "61958",
  [WarframeSymbols.SigilsSteelMeridianSteelMeridianLevel5]: "61959",
  [WarframeSymbols.SigilsSteelMeridianSteelMeridianLevel4]: "61960",
  [WarframeSymbols.SigilsSteelMeridianSteelMeridianLevel3]: "61961",
  [WarframeSymbols.SigilsSteelMeridianSteelMeridianLevel2]: "61962",
  [WarframeSymbols.SigilsSteelMeridianSteelMeridianLevel1]: "61963",
  [WarframeSymbols.SigilsSolarisUnitedSolarisLevel5]: "61964",
  [WarframeSymbols.SigilsSolarisUnitedSolarisLevel4]: "61965",
  [WarframeSymbols.SigilsSolarisUnitedSolarisLevel3]: "61966",
  [WarframeSymbols.SigilsSolarisUnitedSolarisLevel2]: "61967",
  [WarframeSymbols.SigilsSolarisUnitedSolarisLevel1]: "61968",
  [WarframeSymbols.SigilsRedVeilRedVeilLevel5]: "61969",
  [WarframeSymbols.SigilsRedVeilRedVeilLevel4]: "61970",
  [WarframeSymbols.SigilsRedVeilRedVeilLevel3]: "61971",
  [WarframeSymbols.SigilsRedVeilRedVeilLevel2]: "61972",
  [WarframeSymbols.SigilsRedVeilRedVeilLevel1]: "61973",
  [WarframeSymbols.SigilsOstronOstronLevel5]: "61974",
  [WarframeSymbols.SigilsOstronOstronLevel4]: "61975",
  [WarframeSymbols.SigilsOstronOstronLevel3]: "61976",
  [WarframeSymbols.SigilsOstronOstronLevel2]: "61977",
  [WarframeSymbols.SigilsOstronOstronLevel1]: "61978",
  [WarframeSymbols.SigilsNewLokaNewLokaLevel5]: "61979",
  [WarframeSymbols.SigilsNewLokaNewLokaLevel4]: "61980",
  [WarframeSymbols.SigilsNewLokaNewLokaLevel3]: "61981",
  [WarframeSymbols.SigilsNewLokaNewLokaLevel2]: "61982",
  [WarframeSymbols.SigilsNewLokaNewLokaLevel1]: "61983",
  [WarframeSymbols.SigilsNecraloidNecraloidLevel3]: "61984",
  [WarframeSymbols.SigilsNecraloidNecraloidLevel2]: "61985",
  [WarframeSymbols.SigilsNecraloidNecraloidLevel1]: "61986",
  [WarframeSymbols.SigilsEntratiEntratiLevel5]: "61987",
  [WarframeSymbols.SigilsEntratiEntratiLevel4]: "61988",
  [WarframeSymbols.SigilsEntratiEntratiLevel3]: "61989",
  [WarframeSymbols.SigilsEntratiEntratiLevel2]: "61990",
  [WarframeSymbols.SigilsEntratiEntratiLevel1]: "61991",
  [WarframeSymbols.SigilsCephalonSudaCephalonSudaLevel5]: "61992",
  [WarframeSymbols.SigilsCephalonSudaCephalonSudaLevel4]: "61993",
  [WarframeSymbols.SigilsCephalonSudaCephalonSudaLevel3]: "61994",
  [WarframeSymbols.SigilsCephalonSudaCephalonSudaLevel2]: "61995",
  [WarframeSymbols.SigilsCephalonSudaCephalonSudaLevel1]: "61996",
  [WarframeSymbols.SigilsArbitersOfHexisArbitersLevel5]: "61997",
  [WarframeSymbols.SigilsArbitersOfHexisArbitersLevel4]: "61998",
  [WarframeSymbols.SigilsArbitersOfHexisArbitersLevel3]: "61999",
  [WarframeSymbols.SigilsArbitersOfHexisArbitersLevel2]: "62000",
  [WarframeSymbols.SigilsArbitersOfHexisArbitersLevel1]: "62001",
};
