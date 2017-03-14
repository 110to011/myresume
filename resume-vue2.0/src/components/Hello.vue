<template>
  <div id="container" data-PageSwitch>
    <div class="sections">
      <div class="section" id="section0">
        <self-intro></self-intro>
      </div>
      <div class="section active" id="section1">
        <job-intension></job-intension>
      </div>
      <div class="section" id="section2">
        <education-exper></education-exper>
      </div>
      <div class="section" id="section3">
        <project-exper></project-exper>
      </div>
      <div class="section" id="section4">
        <certify-honor></certify-honor>
      </div>
      <div class="section" id="section5">
        <profession-skil></profession-skil>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      genNet('section3');
    },
    components: {
      SelfIntro: require('./SelfIntro'),
      JobIntension: require('./JobIntension'),
      EducationExper: require('./EducationExper'),
      ProjectExper: require('./ProjectExper'),
      CertifyHonor: require('./CertifyHonor'),
      ProfessionSkil: require('./ProfessionSkil')

    }
  }
</script>




