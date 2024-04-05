<template>
    <div v-if="contact" class="page">
        <h4>
            Thêm Liên Hệ
        </h4>
        <ContactForm
            :contact="contact"
            @submit:contact="createContact"
            @delete:contact="deleteContact"
        />
        <p>{{ message }}</p>
    </div>
</template>
<script>
    import ContactForm from "@/components/ContactForm.vue";
    import ContactService from "@/services/contact.service";

    export default {
        components: {
            ContactForm,
        },

        data() {
            return {
                contact: null,
                message: "",
            };
        },

        methods: {

            async createContact(data) {
                try {
                    await ContactService.create(data);
                    this.$router.push({
                        name: "contactbook"
                    });
                } catch (error) {
                    console.log(error);
                }
            },

            async deleteContact() {
                
            },
        },

        created() {
            this.contact = {
                _id: null,
                name: "",
                email: "",
                address: "",
                phone: "",
                favorite: false
            }
            this.message = ""
        },
    };
</script>