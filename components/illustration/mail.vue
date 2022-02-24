<template>
  <div class="mockup-phone border-primary">
    <div class="camera"></div>
    <div class="display">
      <div class="bg-white artboard artboard-demo phone-1">
        <div class="m-8">
          <Logo class="h-8 m-8" />
          <p class="text-lg font-bold text-gray-900">Hallo Tom,</p>
          <br />
          <p class="text-gray-500">
            In de afgelopen week heeft WoningFinder op 6 passende woningen voor
            jou gereageerd:
          </p>

          <div class="mt-6 card bg-secondary text-secondary-content">
            <div class="card-body">
              <h2 class="card-title">Overtuigd?</h2>
              <div class="justify-end card-actions">
                <NuxtLink to="/start" class="btn btn-primary"
                  >Begin nu</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>