interface Ref<T=any> {
    value: T,
}
function isRef<T>(r: Ref<T>): r is Ref<T>;
function isRef<T>(r: unknown): r is Ref<T>;
function isRef(r: any): r is Ref {
    return Boolean(r && r.__v_isRef === true)
}
// @ts-ignore
function unref<T>(ref: T): T extends Ref<infer V> ? V : T {
    return isRef(ref) ? (ref.value as any) : ref;
}