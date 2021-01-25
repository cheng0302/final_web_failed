<template lang="pug">
  #menu
    .menu
      el-menu#menu(
        :default-active="activeIndex"
        text-color="#000"
        font-size="3pt"
        menu-trigger="hover"
        mode="horizontal" 
        background-color="transparent"

        @select="handleSelect"
        )
          el-menu-item.nthuipta(index="3", menu-trigger="hover") News 
          
          el-submenu.nthuipta(index="4", menu-trigger="hover") 
            template.nthuipta(slot="title") About Me
            el-menu-item.nthuipta(index="4-1") Story
            el-menu-item.nthuipta(index="4-2") Chronicle
            el-menu-item.nthuipta(index="4-2") Future
            el-menu-item.nthuipta(index="4-4") Contact
          
          el-submenu.nthuipta(index="5", menu-trigger="hover") 
            template.nthuipta(slot="title") Design Projects
            el-menu-item.nthuipta(index="5-1") Hackathon Taiwan Jr.
            el-menu-item.nthuipta(index="5-2") 明道高中美展
            el-submenu.nthuipta(index="5-3", menu-trigger="hover") 
                template(slot="title") Branding
                el-menu-item(index="5-3-1") 呂記木藝
                el-menu-item(index="5-3-2") 一番鍋燒
                el-menu-item(index="5-3-3") 泰后駕到
                el-menu-item(index="5-3-4") Flat Seven
                el-menu-item(index="5-3-5") Null Cover
            el-submenu.nthuipta(index="5-4", menu-trigger="hover") 
                template(slot="title") Education Travel magazine
                el-menu-item(index="5-4-1") Australia 2016
                el-menu-item(index="5-4-2") Shanghai and Suzhou 2017
            el-menu-item.nthuipta(index="5-5") Pechakucha Designer Night
            el-menu-item.nthuipta(index="5-6") 廣達游於藝
          
          el-submenu.nthuipta(index="6", menu-trigger="hover") 
            template.nthuipta(slot="title") VR Projects
            el-menu-item.nthuipta(index="6-1") 心情魁儡（之一）
            el-menu-item.nthuipta(index="6-2") 心情魁儡（之二）
          
          el-submenu.nthuipta(index="7", menu-trigger="hover") 
            template.nthuipta(slot="title") On-going Projects
            el-menu-item.nthuipta(index="7-1") Audio-Visualization
            el-menu-item.nthuipta(index="7-2") BioArt Introduction
            el-menu-item.nthuipta(index="7-3") Calligrapghy
</template>

<script>
// export default {
//   data(){}
    
// }
</script>

<style lang="sass">

.menu
  position: absolute
  top: 20px
  left: 750px

#menu
  border-bottom: 0px

el-menu
  position: absolute
</style>

