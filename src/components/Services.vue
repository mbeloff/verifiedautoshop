<template>
  <div class="py-5">
    <div class="container">
      <p>
        Verified Autoshop blha blah Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Molestias obcaecati voluptate blanditiis at hic
        necessitatibus?
      </p>
      <div class="small ml-0 ml-md-2">
        <h5 class="color-prime">Why go Verified?</h5>
        <ul class="list-unstyled color-light mb-0">
          <li class="list-item mb-2">
            <i class="fas fa-check-circle mr-2"></i>We have the experience and
            know-how to service all makes and models.
          </li>
          <li class="list-item mb-2">
            <i class="fas fa-check-circle mr-2"></i>We're committed to making
            great service and quality parts affordable.
          </li>
          <li class="list-item mb-2">
            <i class="fas fa-check-circle mr-2"></i>We'll never undertake work
            without discussing it with you first; no surprises on your bill.
          </li>
        </ul>
      </div>
      <a href="" class="btn btn-cs btn-outline mb-5 mt-2">Get a Quote</a>
    </div>

    <div class="container p-0 px-md-3">
      <h1 class="mb-3 font-italic">
        <i class=" fas fa-check-circle mr-2"></i>Services
      </h1>
      <tabs>
        <tab title="Servicing">
          <h4>Servicing</h4>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus dicta
          esse nam quaerat rerum? Facilis quae, voluptates nam ab eum inventore
          eos repudiandae expedita non?</tab
        >
        <tab title="Air Conditioning"
          ><h4>Air Conditioning</h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          sunt ducimus numquam odit, cumque, dolorem quas nemo, ut perspiciatis
          id veniam! Consequuntur natus ut aliquid laboriosam quasi laborum
          commodi quod blanditiis quam fugit dolorum, nihil minima labore fugiat
          iusto. Aliquid?</tab
        >
        <tab title="Diagnostics"
          ><h4>Diagnostics</h4>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
          asperiores voluptas, magni omnis fugit ab.</tab
        >
        <tab title="Auto Electrical"
          ><h4>Auto Electrical</h4>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          aliquam perspiciatis neque mollitia dolor laudantium, ipsum doloribus
          dolores nobis.</tab
        >
        <tab title="Inspections"
          ><h4>Inspections</h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          porro corrupti quam! Unde corporis possimus quis dolorem dignissimos
          officia odit fugit, cupiditate tenetur nihil omnis.</tab
        >
        <tab title="Brakes & Suspensions"
          ><h4>Brakes & Suspensions</h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae
          obcaecati quo?
        </tab>
        <tab title="Paint & Panel"
          ><h4>Paint & Panel</h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae
          obcaecati quo?
        </tab>
        <tab title="Tyres"
          ><h4>Tyres</h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          accusantium accusamus quaerat qui vel rem voluptate assumenda, beatae
          saepe tenetur nulla optio.</tab
        >
      </tabs>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Tab from "@/components/Tab.vue";
import Tabs from "@/components/Tabs.vue";
export default {
  components: {
    Tab,
    Tabs
  },
  name: "Home",
  methods: {
    show() {
      this.$modal.show("modal");
    },
    hide() {
      this.$modal.hide("modal");
    }
  }
};
</script>
<style lang="scss"></style>
