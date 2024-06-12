<template>
    <div>
        <table class="w-100 text-center">
            <thead>
                <tr>
                    <th>래플 이름</th>
                    <th>
                        <slot name="head2"></slot>
                    </th>
                    <th>
                        <slot name="head3"></slot>
                    </th>
                    <th>바로가기</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><slot name="body1"></slot></td>
                    <td><slot name="body2"></slot></td>
                    <td><slot name="body3"></slot></td>
                    <td><slot name="body4"></slot></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
</script>

<style scoped></style>