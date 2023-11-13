<template>
    <Modal title="Kontaktujte nás">
        <div v-if="submitSuccess">
                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lime-100">
                  <Icon name="fa6-solid:check" size="20" class="text-lime-600" aria-hidden="true" />
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <h3 class="text-base font-semibold leading-6 text-gray-900">Formulář úspěšně odeslán</h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">Děkujeme za zájem o naše služby. V blízké době se s Vámi spojíme.</p>
                  </div>
                </div>
        </div>
        <form v-else class="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6" @submit.prevent="onFormSubmit">
          <div class="col-span-full">
            <div class="mt-2">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input v-model="name" type="text" name="username" id="username" autocomplete="name" class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Jméno přijmení" />
              </div>
            </div>
          </div>

          <div class="col-span-full">
              <textarea v-model="message" id="about" placeholder="Text zprávy" name="about" rows="7" class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <div class="text-right w-full flex justify-end col-span-6">
            <button class="px-4 py-2 bg-lime-500 text-white font-medium rounded-md hover:bg-lime-600 transition-all">
                Odeslat
            </button>
          </div>
        </form>
    </Modal>
</template>
<script setup>
const name = ref();
const message = ref();

const submitSuccess = ref(false);

const onFormSubmit = () => {
    console.log(name.value);
    console.log(message.value);

    submitSuccess.value = true;
}
</script>
